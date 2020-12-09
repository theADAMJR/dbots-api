import { Router } from 'express';
import { APIError, sendError } from '../modules/api-utils';
import { ErrorLogger } from '../modules/error-logger';
import Deps from '../../utils/deps';
import { auth } from '../modules/auth-client';

export const router = Router();

const errorLogger = Deps.get<ErrorLogger>(ErrorLogger);

router.get('/', (req, res) => res.json({ hello: 'earth' }));

router.get('/auth', async (req, res) => {
  try {
    const code = req.query.code?.toString();
    if (!code)
      throw new APIError('No code provided.');
    
    const key = await auth.getAccess(code);
    res.redirect(`${process.env.DASHBOARD_URL}/auth?key=${key}`);
  } catch (error) { await sendError(req, res, error); }
});

router.post('/error', async (req, res) => {
  try {
    await errorLogger.dashboard(req.query.message?.toString());
  } catch (error) {
    await sendError(req, res, error);
  }
});

router.get('/login', (req, res) =>
  res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.API_URL}/auth&response_type=code&scope=identify guilds&prompt=none`));

router.all('*', async (req, res) => await sendError(req, res, new APIError('Not found.', 404)));
