import { Router } from 'express';
import { bot } from '../../../bot';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import { sendError, validateIfCanVote } from '../../modules/api-utils';
import { SavedBot, Vote } from '../../../data/models/bot';
import Users from '../../../data/users';
import { sendLog } from './manage-bot-routes';
import config from '../../../../config.json';
import { BotWidgetGenerator } from '../../modules/image/bot-widget-generator';
import Stats from '../../modules/stats';
import BotTokens from '../../../data/bot-tokens';
import fetch from 'node-fetch';
import { updateManageableBots, updateUser, validateBotManager } from '../../modules/middleware';

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

router.get('/user', updateUser, updateManageableBots,
    async (req, res) => res.json(res.locals.bots));

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

router.delete('/:id', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
    try {
        const id = req.params.id;

        await bots.delete(id);
        await sendLog(`Bot Deleted`, `<@!${res.locals.user.id}> deleted <@!${id}> for some reason.`, false);

        await bot.guilds.cache
            .get(config.guild.id)?.members.cache
            .get(id)
            ?.kick();

        res.json({ success: true });
    } catch (error) { sendError(res, 400, error); }
});

router.get('/:id/vote', updateUser, async (req, res) => {
    try {
        const id = req.params.id;
        
        const voter = res.locals.user;
        const savedVoter = await users.get(voter);

        validateIfCanVote(savedVoter);

        savedVoter.lastVotedAt = new Date();
        await savedVoter.save();

        const vote: Vote = { at: new Date(), by: voter.id };

        const savedBot = await bots.get(id);
        savedBot.votes.push(vote);
        savedBot.totalVotes++;
        savedBot.lastVoteAt = new Date();
        await savedBot.save();

        await postVoteWebhook(id, vote);

        res.json({ success: true });        
    } catch (error) { sendError(res, 400, error); }
});

async function postVoteWebhook(id: string, vote: Vote) {
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