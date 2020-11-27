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
      
router.get('/stats', validateBotExists, (req, res) => {
  const id = req.params.id;

  res.json({
    general: stats.general(id),
    topVoters: stats.topVoters(id),
    votes: stats.votes(id),
    recentVotes: stats.recentVotes(id)
  });
});

router.post('/stats', validateBotExists, validateAPIKey, async (req, res) => {
  try {
    const savedBot = await bots.get(req.params.id);
    savedBot.stats = req.body;
    await savedBot.save();    

    res.json(savedBot.stats);
  } catch (error) { await sendError(res, error); }
});

router.get('/log', updateUser, updateManageableBots, validateBotManager, async(req, res) => {
  try {
    const log = await logs.get(req.params.id);
    res.json(log);
  } catch (error) { await sendError(res, error); }
});

router.get('/key', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    const { token } = await botTokens.get(req.params.id);
    res.json(token);
  } catch (error) { await sendError(res, error); }
});

router.get('/key/regen', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    const id = req.params.id;

    await botTokens.delete(id);
    const { token } = await botTokens.get(id);

    res.json(token);
  } catch (error) { await sendError(res, error); }
});

router.patch('/webhook',
  updateUser, validateUser, updateManageableBots, validateBotExists, validateBotManager,
  async (req, res) => {
  try {
    const savedToken = await botTokens.get(req.params.id);
    savedToken.voteWebhookURL = req.body.voteWebhookURL;
    await savedToken.save();

    res.json({ code: 201, message: 'Success!' });
  } catch (error) { await sendError(res, error); }  
});
