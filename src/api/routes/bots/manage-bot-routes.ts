import { Router } from 'express';
import config from '../../../../config.json';
import { bot } from '../../../bot';
import { MessageEmbed, TextChannel } from 'discord.js';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import BotLogs from '../../../data/bot-logs';
import { Listing } from '../../../data/models/bot';
import AuditLogger from '../../modules/audit-logger';
import { sendError, AuthUser } from '../../modules/api-utils';
import { updateManageableBots, updateUser, validateBotManager } from '../../modules/middleware';

export const router = Router();

const bots = Deps.get<Bots>(Bots),
      logs = Deps.get<BotLogs>(BotLogs);

router.post('/', updateUser, async (req, res) => {
  try {
    const listing: Listing = req.body;
    const id = listing.botId;
    await validateCanCreate(req, id);

    const savedBot = await bots.get(id);
    savedBot.listing = listing;
    savedBot.ownerId = res.locals.user.id;
    await savedBot.save();

    await sendLog('Bot Added', `<@!${savedBot.ownerId}> added <@!${id}>.`);

    addDevRole(res.locals.user);

    res.status(201).json(savedBot);
  } catch (error) { sendError(res, 400, error); }
});

router.put('/:id([0-9]{18})', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    const id = req.params.id;

    const listing: Listing = req.body;
    await validateCanEdit(req, listing);

    let savedBot = await saveBotAndChanges(id, req);

    await sendLog('Bot Edited', `<@!${savedBot.ownerId}> edited <@!${id}>.`);

    res.json(savedBot);
  } catch (error) { sendError(res, 400, error); }
});

router.delete('/:id([0-9]{18})', updateUser, updateManageableBots, validateBotManager, async (req, res) => {
  try {
    await bots.delete(req.params.id);

    res.json({ code: 200, message: 'Success' });
  } catch (error) { sendError(res, 400, error); }
});

function addDevRole({ id }: AuthUser) {
  bot.guilds.cache
      ?.get(config.guild.id).members.cache
      .get(id)?.roles
      .add(config.guild.devRoleId);
}

async function validateCanCreate(req, id: string) {
  if (!req.body)
    throw new TypeError('Request body is empty.');

  const exists = await bots.exists(id);
  if (exists)
    throw new TypeError('Bot already exists!');
}
async function validateCanEdit(req, listing: Listing) {
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

export function sendLog(eventName: string, description: string, good = true) {
  return (bot.guilds.cache
    .get(config.guild.id)?.channels.cache
    .get(config.guild.logChannelId) as TextChannel)
    ?.send(new MessageEmbed({
      hexColor: '#' + (good ? '00FF00FF' : 'FF0000FF'),
      description,
      title: eventName
    }));
}