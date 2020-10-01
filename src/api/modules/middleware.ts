import { bot } from '../../bot';
import Bots from '../../data/bots';
import Deps from '../../utils/deps';
import {  getUser, sendError } from './api-utils';

const bots = Deps.get<Bots>(Bots);

export async function updateUser(req, res, next) {
  try {
    const key = req.get('Authorization');    
    res.locals.user = await getUser(key);
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
  } catch (err) { sendError(res, 400, err); }
}

export async function validateBotManager(req, res, next) {
  try {
    const key = req.get('Authorization');
    if (!key)
      throw new TypeError('Unauthorized.');
  
    const botFound = res.locals.bots.some(b => b.id === req.params.id)
    if (!botFound)
      throw TypeError('Bot not manageable.');
  
    return next();
  } catch (err) { sendError(res, 400, err); }
}

export async function validateUser(req, res, next) {
  return (res.locals.user)
    ? next()
    : res.status(401).json({ code: 401, message: 'Unauthorized' });
}