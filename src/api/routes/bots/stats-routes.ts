import { Router } from 'express';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import BotLogs from '../../../data/bot-logs';
import { BotStats, sendError } from '../../modules/api-utils';
import BotTokens from '../../../data/bot-tokens';
import { updateManageableBots, updateUser, validateBotManager } from '../../modules/middleware';

export const router = Router({ mergeParams: true });

const bots = Deps.get<Bots>(Bots),
      botTokens = Deps.get<BotTokens>(BotTokens),
      logs = Deps.get<BotLogs>(BotLogs);

router.post('/stats', async (req, res) => {
  try {
    const id = req.params.id;    
    await botTokens.validate(id, req.headers.authorization);

    const savedBot = await bots.get(id);
    savedBot.stats = req.body as BotStats;
    await savedBot.save();    

    res.json({ success: true });
  } catch (error) { sendError(res, 400, error); }
});

router.get('/log', updateUser, updateManageableBots, validateBotManager, async(req, res) => {
  try {
    const log = await logs.get(req.params.id);
    res.json(log);
  } catch (error) { sendError(res, 400, error); }
});

router.get('/token', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    const { token } = await botTokens.get(req.params.id);
    res.json(token);
  } catch (error) { sendError(res, 400, error); }
});

router.get('/token/regen', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    const id = req.params.id;

    await botTokens.delete(id);
    const { token } = await botTokens.get(id);

    res.json(token);
  } catch (error) { sendError(res, 400, error); }
});