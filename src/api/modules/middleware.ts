import { bot } from '../../bot';
import BotTokens from '../../data/bot-tokens';
import Bots from '../../data/bots';
import { BotDocument, SavedBot } from '../../data/models/bot';
import { SavedBotPack } from '../../data/models/bot-pack';
import Deps from '../../utils/deps';
import { APIError, sendError } from './api-utils';
import { auth } from './auth-client';
import { PartialUsers } from './partial-users';

const bots = Deps.get<Bots>(Bots);
const botTokens = Deps.get<BotTokens>(BotTokens);
const partial = Deps.get<PartialUsers>(PartialUsers);

export async function updateUser(req, res, next) {
  try {
    const key = req.get('Authorization');
    res.locals.user ??= await auth.getUser(key);
    
  } finally {
    return next();
  }
}

export async function updateManageableBots(req, res, next) {
  try {    
    const savedBots = await bots.getManageable(res.locals.user);
    res.locals.bots = await partial.getFromSaved(...savedBots);
    res.locals.savedBots = savedBots;
  
    return next();
  } catch (error) {
    await sendError(req, res, error);
  }
}

export async function validateBotManager(req, res, next) {
  try {
    const botManageable = res.locals.bots?.some(b => b.id === req.params.id);
    if (!botManageable)
      throw new APIError(403);
  
    return next();
  } catch (error) { await sendError(req, res, error); }
}

export async function validatePackOwner(req, res, next) {
  try {
    const key = req.get('Authorization');
    if (!key)
      throw new APIError(401);
  
    const botFound = res.locals.bots.some(b => b.id === req.params.id);
    if (!botFound)
      throw new APIError(403);
  
    return next();
  } catch (error) { await sendError(req, res, error); }
}

export async function validateUser(req, res, next) {
  return (res.locals.user)
    ? next()
    : await sendError(req, res, new APIError(401));
}

export async function validateCanCreate(req, res, next) {
  const exists = await bots.exists(req.body.botId);
  if (exists)
    return await sendError(req, res, new APIError(400));

  const member = bot.guilds.cache
    .get(process.env.GUILD_ID)?.members.cache
    .get(res.locals.user.id);
  try {
    await member.guild.fetchBan(member.user);
    return await sendError(req, res, new APIError(403));
  } catch {}

  return (member)
    ? next()
    : await sendError(req, res, new APIError(401)); 
}

export async function validateBotExistsFromBody(req, res, next) {
  const exists = await bots.exists(req.body.botId);
  return (exists)
    ? next()
    : await sendError(req, res, new APIError(404));
}

export async function validatePackExists(req, res, next) {
  const exists = await SavedBotPack.exists({ _id: req.params.id });
  return (exists)
    ? next()
    : await sendError(req, res, new APIError(404));
}

export async function validateBotExists(req, res, next) {
  const exists = await SavedBot.exists({ _id: req.params.id });  
  return (exists)
    ? next()
    : await sendError(req, res, new APIError(404));
}

export async function validateAPIKey(req, res, next) {
  const savedToken = await botTokens.get(req.params.id);
  return (savedToken.token === req.get('Authorization'))
    ? next()
    : await sendError(req, res, new APIError(401));
}
