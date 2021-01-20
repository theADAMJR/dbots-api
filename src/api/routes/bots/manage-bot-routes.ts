import { Router } from 'express';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import BotLogs from '../../../data/bot-logs';
import { Listing, SavedBot } from '../../../data/models/bot';
import AuditLogger from '../../modules/audit-logger';
import { addDevRole, APIError, apiResponse, kickMember, sendError } from '../../modules/api-utils';
import { updateManageableBots, updateUser, validateBotManager, validateCanCreate, validateUser } from '../../modules/middleware';
import { ChannelLog } from '../../modules/channel-log';
import { PartialUsers } from '../../modules/partial-users';

export const router = Router();

const auditLogger = Deps.get<AuditLogger>(AuditLogger);
const bots = Deps.get<Bots>(Bots);
const channelLog = Deps.get<ChannelLog>(ChannelLog);
const logs = Deps.get<BotLogs>(BotLogs);
const partial = Deps.get<PartialUsers>(PartialUsers);

router.post('/',
  updateUser, validateUser, validateCanCreate,
  async (req, res) => {
  try {
    const listing: Listing = req.body;

    const user = await partial.get(req.body.botId);
    if (!user || user && !user.bot)
      throw new APIError(400);

    const savedBot = await SavedBot.create({
      _id: listing.botId,
      listing,
      ownerId: res.locals.user.id
    });

    await channelLog.added(savedBot);
    await addDevRole(savedBot.ownerId);

    res.status(201).json(savedBot);
  } catch (error) {
    await sendError(req, res, error);
  }
});

router.patch('/:id',
  updateUser, validateUser, updateManageableBots, validateBotManager,
  async (req, res) => {
  try {
    const id = req.params.id;
    const savedBot = await saveBotAndChanges(id, req);
    await channelLog.edited(savedBot);

    res.json(savedBot);
  } catch (error) { await sendError(req, res, error); }
});

router.delete('/:id',
  updateUser, validateUser, updateManageableBots, validateBotManager,
  async (req, res) => {
  try {
    const id = req.params.id;

    await bots.delete(id);
    await channelLog.deleted(id, res.locals.user.id);
    await kickMember(id);

    apiResponse(res, { message: 'Success!' });
  } catch (error) { await sendError(req, res, error); }
});

async function saveBotAndChanges(id: any, req: any) {
  let savedBot = await bots.get(id);

  const change = auditLogger.getChanges(
    { old: savedBot.listing, new: req.body }, savedBot.ownerId);
  
  savedBot.listing = req.body;

  const log = await logs.get(id);
  log.changes.push(change);
  await log.save();
  
  return bots.save(savedBot);
}
