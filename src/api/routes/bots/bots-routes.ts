import { Router } from 'express';
import { AuthClient } from '../../server';
import { bot } from '../../../bot';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import { getUser } from '../user-routes';
import { sendError } from '../../modules/api-utils';
import { SavedBot } from '../../../data/models/bot';
import Users from '../../../data/users';
import { sendLog } from './manage-bot-routes';
import config from '../../../../config.json';
import { UserDocument } from '../../../data/models/user';
import { BotWidgetGenerator } from '../../modules/image/bot-widget-generator';
import Stats from '../../modules/stats';
import BotTokens from '../../../data/bot-tokens';
import fetch from 'node-fetch';

export const router = Router();

const bots = Deps.get<Bots>(Bots),
      botTokens = Deps.get<BotTokens>(BotTokens),
      stats = Deps.get<Stats>(Stats),
      users = Deps.get<Users>(Users);

router.get('/', async (req, res) => {
    try {
        const botUsers = [];
        const savedBots = await SavedBot.find();

        for (const savedBot of savedBots) {
            const botUser = bot.users.cache.get(savedBot.id);
            if (!botUser) continue;

            botUsers.push({
                ...botUser,
                displayAvatarURL: botUser.displayAvatarURL({ dynamic: true, size: 256 }),
                presence: botUser.presence
            });
        }
        res.json({ saved: savedBots, users: botUsers });
    } catch (error) { sendError(res, 400, error); }
});

router.get('/user', async (req, res) => {
    try {
        const bots = await getManagableBots(req.query.key);
        res.json(bots);
    } catch (error) { sendError(res, 400, error); }
});

router.get('/:id', (req, res) => {
    try {
        const botUser = bot.users.cache.get(req.params.id);
        res.json({
            ...botUser,
            displayAvatarURL: botUser.displayAvatarURL({ dynamic: true, size: 256 }),
            presence: botUser.presence
        });
    } catch (error) { sendError(res, 400, error); }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await validateBotManager(req.query.key, id);

        await bots.delete(id);

        const instigator = await getUser(req.query.key);
        await sendLog(`Bot Deleted`, `<@!${instigator.id}> deleted <@!${id}> for some reason.`, false);

        await bot.guilds.cache
            .get(config.guild.id)?.members.cache
            .get(id)
            ?.kick();

        res.json({ success: true });
    } catch (error) { sendError(res, 400, error); }
});

router.get('/:id/vote', async (req, res) => {
    try {
        const id = req.params.id;
        
        const voter = await getUser(req.query.key);
        const savedVoter = await users.get(voter);

        validateIfCanVote(savedVoter);

        savedVoter.lastVotedAt = new Date();
        await savedVoter.save();

        const vote = { at: new Date(), by: voter.id };

        const savedBot = await bots.get(id);
        savedBot.votes.push(vote);
        savedBot.totalVotes++;
        savedBot.lastVoteAt = new Date();
        await savedBot.save();

        await postVoteWebhook(id, vote);

        res.json({ success: true });        
    } catch (error) { sendError(res, 400, error); }
});

async function postVoteWebhook(id: string, vote: any) {
    const savedToken = await botTokens.get(id);
    try {

        await fetch(savedToken.voteWebhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(vote)
        });
    } catch {}
}

router.get('/:id/saved', async (req, res) => {
    try {
        const savedBot = await bots.get(req.params.id);
        res.json(savedBot);
    } catch (error) { sendError(res, 400, error); }
});

router.get('/:id/widget', async (req, res) => {
    try {
        const botUser = bot.users.cache.get(req.params.id);
        const savedBot = await bots.get(req.params.id);
        const image = await new BotWidgetGenerator(botUser, savedBot)
            .generate(req.query.size?.toString() ?? 'large');
        
        res.set({ 'Content-Type': 'image/png' }).send(image);
    } catch (error) { sendError(res, 400, error); }
});

router.get('/:id/stats', (req, res) => {
    const id = req.params.id;

    res.json({
        general: stats.general(id),
        topVoters: stats.votes(id),
        votes: stats.votes(id),
        recentVotes: stats.recentVotes(id)
    });
});

function validateIfCanVote(savedVoter: UserDocument) {
    const twelveHoursMs = 1000 * 60 * 60 * 12;
    const oneDayAgo = new Date(Date.now() - twelveHoursMs);
    if (savedVoter.lastVotedAt > oneDayAgo) {
        const timeLeftMs = new Date(savedVoter.lastVotedAt.getTime() + twelveHoursMs).getTime() - Date.now();
        const hoursLeft = (timeLeftMs / 1000 / 60 / 60);
        throw new TypeError(`You have already voted. You can next vote in ${hoursLeft.toFixed(2)} hours.`);
    }
}

async function getManagableBots(key: any) {
    const { id } = await AuthClient.getUser(key);
    const owner = bot.users.cache.get(id);

    const savedBots = await bots.getManageable(owner);
    const ids = savedBots.map(b => b._id);

    return bot.users.cache.filter(u => ids.includes(u.id));
}

export async function validateBotManager(key: any, botId: string) {
    if (!key)
        throw new TypeError('Unauthorized.');

    const bots = await getManagableBots(key);
    if (!bots.some(b => b.id === botId))
        throw TypeError('Bot not manageable.');
}

export interface BotStats {
    guildCount: number;
}