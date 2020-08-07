import { Router } from 'express';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import BotLogs from '../../../data/bot-logs';
import { sendError } from '../../modules/api-utils';
import BotTokens from '../../../data/bot-tokens';
import { BotStats, validateBotManager } from './bots-routes';

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

    // update stats for bot
    

    res.json({ success: true });
  } catch (error) { sendError(res, 400, error); }
});

router.get('/log', async(req, res) => {
  try {
    const id = req.params.id;
    await validateBotManager(req.query.key, id);

    const log = await logs.get(id);
    res.json(log);
  } catch (error) { sendError(res, 400, error); }
});

router.get('/token', async (req, res) => {
  try {
    const id = req.params.id;
    await validateBotManager(req.query.key, id);

    const { token } = await botTokens.get(id);
    res.json(token);
  } catch (error) { sendError(res, 400, error); }
});

router.get('/token/regen', async (req, res) => {
  try {
    const id = req.params.id;
    await validateBotManager(req.query.key, id);

    await botTokens.delete(id);
    const { token } = await botTokens.get(id);

    res.json(token);
  } catch (error) { sendError(res, 400, error); }
});