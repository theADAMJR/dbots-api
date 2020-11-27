import { Router } from 'express';
import { AuthClient } from '../server';
import { APIError, sendError } from '../modules/api-utils';
import { ErrorLogger } from '../modules/error-logger';
import Deps from '../../utils/deps';

export const router = Router();

const errorLogger = Deps.get<ErrorLogger>(ErrorLogger);

router.get('/', (req, res) => res.json({ hello: 'earth' }));

router.get('/auth', async (req, res) => {
  try {
    const key = await AuthClient.getAccess(req.query.code?.toString());
    res.redirect(`${process.env.DASHBOARD_URL}/auth?key=${key}`);
  } catch (error) { await sendError(res, error); }
});

router.post('/error', async (req, res) => {
  try {
    await errorLogger.dashboard(req.query.message?.toString());
  } catch (error) {
    await sendError(res, error);
  }
});

router.get('/login', (req, res) =>
  res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${process.env.BOT_ID}&redirect_uri=${process.env.API_URL}/auth&response_type=code&scope=identify guilds&prompt=none`));

router.get('*', async (req, res) => await sendError(res, new APIError('Not found.', 404)));
