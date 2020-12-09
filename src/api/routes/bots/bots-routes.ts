import { Router } from 'express';
import { bot } from '../../../bot';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import { apiResponse, sendError, validateIfCanVote } from '../../modules/api-utils';
import { SavedBot, Vote } from '../../../data/models/bot';
import Users from '../../../data/users';
import { BotWidgetGenerator } from '../../modules/image/bot-widget-generator';
import BotTokens from '../../../data/bot-tokens';
import fetch from 'node-fetch';
import { updateManageableBots, updateUser, validateBotExists, validateUser } from '../../modules/middleware';
import { getWeek } from '../../../utils/command-utils';

export const router = Router();

const bots = Deps.get<Bots>(Bots);
const botTokens = Deps.get<BotTokens>(BotTokens);
const users = Deps.get<Users>(Users);

router.get('/', async (req, res) => {
  try {
    const botUsers = [];
    const savedBots = await SavedBot.find();

    for (const savedBot of savedBots) {
      const botUser = bot.users.cache.get(savedBot.id);
      if (!botUser) continue;

      const votedForThisWeek = savedBot.lastVoteAt
        && getWeek(savedBot.lastVoteAt) === getWeek(new Date());
      if (!votedForThisWeek)
        savedBot.votes = [];

      botUsers.push({
        ...botUser,
        displayAvatarURL: botUser.displayAvatarURL({ dynamic: true, size: 256 }),
        presence: botUser.presence
      });
    }
    res.json({ saved: savedBots, users: botUsers });
  } catch (error) { await sendError(req, res, error); }
});

router.get('/user',
  updateUser, validateUser, updateManageableBots,
  async (req, res) => 
    res.json({
      partialUsers: res.locals.bots,
      saved: res.locals.savedBots
    })
);

router.get('/:id', validateBotExists, async (req, res) => {
  try {
    const botUser = bot.users.cache.get(req.params.id);
    res.json({
      saved: await bots.get(req.params.id),
      user: {
        ...botUser,
        displayAvatarURL: botUser.displayAvatarURL({ dynamic: true, size: 256 }),
        presence: botUser.presence
      }
    });
  } catch (error) { await sendError(req, res, error); }
});

router.get('/:id/vote',
  updateUser, validateUser, validateBotExists,
  async (req, res) => {
  try {    
    const voter = res.locals.user;
    const savedVoter = await users.get(voter);

    validateIfCanVote(savedVoter);

    savedVoter.lastVotedAt = new Date();
    await savedVoter.save();

    const vote = await registerBotVote(req.params.id, voter.id);
    await postVoteWebhook(req.params.id, vote);

    res.json(vote);
  } catch (error) { await sendError(req, res, error); }
});

router.get('/:id/widget', validateBotExists, async (req, res) => {
  try {
    const botUser = bot.users.cache.get(req.params.id);
    const savedBot = await bots.get(req.params.id);
    const image = await new BotWidgetGenerator(botUser, savedBot)
      .generate(req.query.size?.toString() ?? 'large');
    
    res.set({ 'Content-Type': 'image/png' }).send(image);
  } catch (error) { await sendError(req, res, error); }
});

async function registerBotVote(botId: string, voterId: string) {
  const vote: Vote = { at: new Date(), by: voterId };

  const savedBot = await bots.get(botId);
  savedBot.votes.push(vote);
  savedBot.totalVotes++;
  savedBot.lastVoteAt = new Date();
  await savedBot.save();

  return vote;
}

async function postVoteWebhook(id: string, vote: Vote) {
  const savedToken = await botTokens.get(id);
  try {
    await fetch(savedToken.voteWebhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': savedToken.token
      },
      body: JSON.stringify(vote)
    });
  } catch {}
}
