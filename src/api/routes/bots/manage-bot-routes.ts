import { Router } from 'express';
import { bot } from '../../../bot';
import { MessageEmbed, TextChannel } from 'discord.js';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import BotLogs from '../../../data/bot-logs';
import { Listing } from '../../../data/models/bot';
import AuditLogger from '../../modules/audit-logger';
import { APIError, sendError } from '../../modules/api-utils';
import { updateManageableBots, updateUser, validateBotExists, validateBotExistsFromBody, validateBotManager, validateCanCreate, validateUser } from '../../modules/middleware';
import BotTokens from '../../../data/bot-tokens';

export const router = Router();

const bots = Deps.get<Bots>(Bots);
const logs = Deps.get<BotLogs>(BotLogs);
const tokens = Deps.get<BotTokens>(BotTokens);

router.post('/', updateUser, validateUser, validateCanCreate, async (req, res) => {
  try {
    const listing: Listing = req.body;
    const id = listing.botId;

    const user = bot.users.cache.get(id);
    if (user && !user.bot)
      throw new APIError('Cannot add a non-bot user.', 400);

    const savedBot = await bots.get(id);
    savedBot.listing = listing;
    savedBot.ownerId = res.locals.user.id;
    await savedBot.save();

    try {
      await sendLog('Bot Added', `<@!${savedBot.ownerId}> added <@!${id}>.`);
      await addDevRole(savedBot.ownerId);
    }
    catch {}

    res.status(201).json(savedBot);
  } catch (error) { sendError(res, error); }
});

router.patch('/:id',
  updateUser, updateManageableBots, validateBotManager, validateBotExists,
  async (req, res) => {
  try {
    const id = req.params.id;
    const savedBot = await saveBotAndChanges(id, req);
    await sendLog('Bot Edited', `<@!${savedBot.ownerId}> edited <@!${id}>.`);

    res.json(savedBot);
  } catch (error) { sendError(res, error); }
});

router.delete('/:id',
  updateUser, updateManageableBots, validateBotManager, validateBotExistsFromBody,
  async (req, res) => {
  try {
    const id = req.params.id;

    await bots.delete(id);
    await sendLog(
      `Bot Deleted`,
      `<@!${res.locals.user.id}> deleted <@!${id}> for some reason.`,
      HexColor.Red
    );

    await bot.guilds.cache
      .get(process.env.GUILD_ID)?.members.cache
      .get(id)
      ?.kick();

    res.json({ code: 200, message: 'Success!' });
  } catch (error) { sendError(res, error); }
});

router.patch('/:id/webhook',
  updateUser, updateManageableBots, validateBotExistsFromBody, validateBotManager,
  async (req, res) => {
  try {
    const savedToken = await tokens.get(req.params.id);
    savedToken.voteWebhookURL = req.body.voteWebhookURL;
    await savedToken.save();

    res.json({ code: 201, message: 'Success!' });
  } catch (error) { sendError(res, error); }  
});

function addDevRole(userId: string) {
  return bot.guilds.cache
    ?.get(process.env.GUILD_ID)?.members.cache
    .get(userId)?.roles
    .add(process.env.DEV_ROLE_ID, 'Added bot.');
}

async function saveBotAndChanges(id: any, req: any) {
  let savedBot = await bots.get(id);

  const change = AuditLogger.getChanges(
    { old: savedBot.listing, new: req.body }, savedBot.ownerId);
  
  savedBot.listing = req.body;

  const log = await logs.get(id);
  log.changes.push(change);
  await log.save();
  
  return bots.save(savedBot);
}

export function sendLog(title: string, description: string, hexColor = HexColor.Blue) {
  return (bot.guilds.cache
    .get(process.env.GUILD_ID)?.channels.cache
    .get(process.env.LOG_CHANNEL_ID) as TextChannel)
    ?.send(new MessageEmbed({ color: hexColor, description, title }));
}

export enum HexColor {
  Blue = '#4287f5',
  Green = '#42f54e',
  Red = '#f54242'
}
