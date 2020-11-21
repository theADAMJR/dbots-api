import { Router } from 'express';
import config from '../../../../config.json';
import { bot } from '../../../bot';
import { MessageEmbed, TextChannel } from 'discord.js';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import BotLogs from '../../../data/bot-logs';
import { Listing } from '../../../data/models/bot';
import AuditLogger from '../../modules/audit-logger';
import { sendError } from '../../modules/api-utils';
import { updateManageableBots, updateUser, validateBotManager, validateUser } from '../../modules/middleware';
import BotTokens from '../../../data/bot-tokens';

export const router = Router();

const bots = Deps.get<Bots>(Bots);
const logs = Deps.get<BotLogs>(BotLogs);
const tokens = Deps.get<BotTokens>(BotTokens);

router.post('/', updateUser, validateUser, async (req, res) => {
  try {
    const listing: Listing = req.body;
    const id = listing.botId;
    await validateCanCreate(req, res, id);

    if (bot.users.cache.has(id) && !bot.users.cache.get(id)?.bot)
      throw new TypeError('This user is not a bot.');

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
  } catch (error) { sendError(res, 400, error); }
});

router.put('/:id/webhook', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    const id = req.params.id;

    await validateCanEdit(req, { botId: id });

    const savedToken = await tokens.get(id);
    savedToken.voteWebhookURL = req.body.voteWebhookURL;
    await savedToken.save();

    res.json({ code: 201, message: 'Success!' });
  } catch (error) { sendError(res, 400, error); }  
});

router.put('/:id', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    const id = req.params.id;

    const listing: Listing = req.body;
    await validateCanEdit(req, listing);

    let savedBot = await saveBotAndChanges(id, req);

    await sendLog('Bot Edited', `<@!${savedBot.ownerId}> edited <@!${id}>.`);

    res.json(savedBot);
  } catch (error) { sendError(res, 400, error); }
});

router.delete('/:id', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    await bots.delete(req.params.id);

    res.json({ code: 200, message: 'Success' });
  } catch (error) { sendError(res, 400, error); }
});

function addDevRole(id: string) {
  return bot.guilds.cache
      ?.get(process.env.GUILD_ID).members.cache
      .get(id)?.roles
      .add(process.env.DEV_ROLE_ID, 'Added bot.');
}

async function validateCanCreate(req, res, id: string) {
  if (!req.body)
    throw new TypeError('Request body is empty.');

  const exists = await bots.exists(id);
  if (exists)
    throw new TypeError('Bot already exists!');

  const userInGuild = bot.guilds.cache
    .get(process.env.GUILD_ID).members.cache
    .has(res.locals.user.id);
  if (!userInGuild)
    throw new TypeError('You must be in the DBots Discord Server to post bots.');
}
async function validateCanEdit(req, listing: { botId: string }) {
  if (!req.body)
    throw new TypeError('Request body is empty.');

  const exists = await bots.exists(listing.botId);
  if (!exists)
    throw new TypeError('Bot does not exist.');
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
