import { Router } from 'express';
import { AuthClient } from '../server';

import { bot } from '../../bot';
import { MessageEmbed } from 'discord.js';
import { APIError, sendError } from '../modules/api-utils';
import { updateUser } from '../modules/middleware';

export const router = Router();

router.get('/', (req, res) => res.json({ hello: 'earth' }));

router.get('/auth', async (req, res) => {
  try {
    const key = await AuthClient.getAccess(req.query.code.toString());
    res.redirect(`${process.env.DASHBOARD_URL}/auth?key=${key}`);
  } catch (error) { sendError(res, error); }
});

router.post('/error', updateUser, async(req, res) => {
  try {
    let user = res.locals.user ?? { id: 'N/A' };
    
    await bot.users.cache
      .get(process.env.BOT_OWNER_ID)
      .send(new MessageEmbed({
        title: 'Dashboard Error',
        description: `**Message**: ${req.body.message}`,
        footer: { text: `User ID: ${user.id}` }
      }));
    } catch (error) { sendError(res, error); }
});

router.get('/login', (req, res) =>
  res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${process.env.BOT_ID}&redirect_uri=${process.env.API_URL}/auth&response_type=code&scope=identify guilds&prompt=none`));

router.get('*', (req, res) => sendError(res, new APIError('Not found.')));
