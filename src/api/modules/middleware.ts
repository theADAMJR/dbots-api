import { bot } from '../../bot';
import Bots from '../../data/bots';
import { SavedBot } from '../../data/models/bot';
import { SavedBotPack } from '../../data/models/bot-pack';
import Deps from '../../utils/deps';
import { API } from '../server';
import {  APIError, getUser, sendError } from './api-utils';

const bots = Deps.get<Bots>(Bots);

export async function updateUser(req, res, next) {
  try {
    const key = req.get('Authorization');    
    res.locals.user ??= await getUser(key);
  } finally {
    return next();
  }
}

export async function updateManageableBots(req, res, next) {
  try {
    const savedBots = await bots.getManageable(res.locals.user);  
    
    res.locals.bots = bot.users.cache
      .filter(u => savedBots.some(sb => sb._id === u.id));
  
    return next();
  } catch (error) { sendError(res, error); }
}

export async function validateBotManager(req, res, next) {
  try {
    const key = req.get('Authorization');
    if (!key)
      throw new APIError('Unauthorized.', 401);
  
    const botFound = res.locals.bots.some(b => b.id === req.params.id);
    if (!botFound)
      throw new APIError('Bot not manageable.');
  
    return next();
  } catch (error) { sendError(res, error); }
}

export async function validatePackOwner(req, res, next) {
  try {
    const key = req.get('Authorization');
    if (!key)
      throw new APIError('Unauthorized.', 401);
  
    const botFound = res.locals.bots.some(b => b.id === req.params.id)
    if (!botFound)
      throw new APIError('Bot not manageable.');
  
    return next();
  } catch (error) { sendError(res, error); }
}

export async function validateUser(req, res, next) {
  return (res.locals.user)
    ? next()
    : res.status(401).json({ code: 401, message: 'Unauthorized' });
}

export async function validateCanCreate(req, res, next) {
  const exists = await bots.exists(req.params.id);
  if (exists)
    return sendError(res, new APIError('Bot already exists.', 400));

  const member = bot.guilds.cache
    .get(process.env.GUILD_ID)?.members.cache
    .get(res.locals.user.id);
  try {
    await member.guild.fetchBan(member.user);
    return sendError(res, new APIError('You are banned from the guild.', 403))
  } catch {}

  return (member)
    ? next()
    : sendError(res, new APIError('You must be in the DBots Discord Server to post bots.', 401)); 
}

export async function validateBotExistsFromBody(req, res, next) {
  const exists = await bots.exists(req.body.botId);
  return (exists)
    ? next()
    : sendError(res, new APIError('Bot does not exist.', 404));
}

export async function validatePackExists(req, res, next) {
  const exists = await SavedBotPack.exists({ _id: req.params.id });
  return (exists)
    ? next()
    : sendError(res, new APIError('Bot pack does not exist.', 404));
}


export async function validateBotExists(req, res, next) {
  const exists = await SavedBot.exists({ _id: req.params.id });
  return (exists)
    ? next()
    : sendError(res, new APIError('Bot does not exist.', 404));
}