import { Router } from 'express';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import BotLogs from '../../../data/bot-logs';
import { sendError } from '../../modules/api-utils';
import BotTokens from '../../../data/bot-tokens';
import { updateManageableBots, updateUser, validateAPIKey, validateBotExists, validateBotExistsFromBody, validateBotManager, validateUser } from '../../modules/middleware';
import Stats from '../../modules/stats';

export const router = Router({ mergeParams: true });

const bots = Deps.get<Bots>(Bots);
const botTokens = Deps.get<BotTokens>(BotTokens);
const logs = Deps.get<BotLogs>(BotLogs);
const stats = Deps.get<Stats>(Stats);
      
router.get('/stats', validateBotExists, async (req, res) => {
  const savedBot = await bots.get(req.params.id);

  res.json({
    general: stats.general(savedBot),
    topVoters: stats.topVoters(savedBot),
    votes: savedBot.votes,
    recentVotes: stats.recentVotes(savedBot)
  });
});

router.post('/stats', validateBotExists, validateAPIKey, async (req, res) => {
  try {
    const savedBot = await bots.get(req.params.id);
    savedBot.stats = req.body;
    await savedBot.save();    

    res.json(savedBot.stats);
  } catch (error) { await sendError(req, res, error); }
});

router.get('/log', updateUser, validateUser, updateManageableBots, validateBotManager,
  async(req, res) => {
  try {
    const log = await logs.get(req.params.id);
    res.json(log);
  } catch (error) { await sendError(req, res, error); }
});

router.get('/key/regen', updateUser, validateUser, updateManageableBots, validateBotManager,
  async (req, res) => {
  try {
    const id = req.params.id;

    await botTokens.delete(id);
    const { token } = await botTokens.get(id);

    res.json(token);
  } catch (error) { await sendError(req, res, error); }
});

router.get('/api',
  updateUser, updateManageableBots, validateBotManager,
  async (req, res) => {
  try {
    const savedToken = await botTokens.get(req.params.id);
    res.json(savedToken);
  } catch (error) { await sendError(req, res, error); }
});

router.patch('/api',
  updateUser, validateUser, updateManageableBots, validateBotManager,
  async (req, res) => {
  try {
    const savedToken = await botTokens.get(req.params.id);
    savedToken.voteWebhookURL = req.body.voteWebhookURL;
    await savedToken.save();

    res.json(savedToken);
  } catch (error) { await sendError(req, res, error); }  
});
