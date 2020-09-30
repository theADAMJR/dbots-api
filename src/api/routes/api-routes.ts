import { Router } from 'express';
import { AuthClient } from '../server';
import config from '../../../config.json';
import { bot } from '../../bot';
import { MessageEmbed } from 'discord.js';
import { sendError } from '../modules/api-utils';
import { updateUser } from '../modules/middleware';

export const router = Router();

router.get('/', (req, res) => res.json({ elthre: 'hlao' }));

router.get('/auth', async (req, res) => {
  try {
    const key = await AuthClient.getAccess(req.query.code);
    res.redirect(`${config.dashboardURL}/auth?key=${key}`);
  } catch (error) { sendError(res, 400, error); }
});

router.post('/error', updateUser, async(req, res) => {
  try {
    let user = res.locals.user ?? { id: 'N/A' };
    
    await bot.users.cache
      .get(config.bot.ownerId)
      .send(new MessageEmbed({
        title: 'Dashboard Error',
        description: `**Message**: ${req.body.message}`,
        footer: { text: `User ID: ${user.id}` }
      }));
    } catch (error) { sendError(res, 400, error); }
});

router.get('/login', (req, res) =>
  res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${config.bot.id}&redirect_uri=${config.api.url}/auth&response_type=code&scope=identify guilds&prompt=none`));

router.get('*', (req, res) => sendError(res, 404, new TypeError('Not found.')));