import fs from 'fs';
import { Router } from 'express';
import { promisify } from 'util';
import { resolve } from 'path';
import { AuthClient } from '../server';
import { APIError, sendError } from '../modules/api-utils';

const appendFile = promisify(fs.appendFile);
const dashboardLogsPath = resolve('./logs/dashboard');
const sessionDate = new Date()
  .toISOString()
  .replace(/:/g, '');

export const router = Router();

router.get('/', (req, res) => res.json({ hello: 'earth' }));

router.get('/auth', async (req, res) => {
  try {
    const key = await AuthClient.getAccess(req.query.code.toString());
    res.redirect(`${process.env.DASHBOARD_URL}/auth?key=${key}`);
  } catch (error) { sendError(res, error); }
});

router.post('/error', async (req, res) => {
  try {
    await appendFile(
      `${dashboardLogsPath}/${sessionDate}.log`,
      req.body.message + '\n'
    );
  } catch (error) {
    sendError(res, error);
  }
});

router.get('/login', (req, res) =>
  res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${process.env.BOT_ID}&redirect_uri=${process.env.API_URL}/auth&response_type=code&scope=identify guilds&prompt=none`));

router.get('*', (req, res) => sendError(res, new APIError('Not found.')));
