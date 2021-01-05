import { Router } from 'express';
import Deps from '../../utils/deps';
import Users from '../../data/users';
import { APIError, sendError } from '../modules/api-utils';
import { bot } from '../../bot';
import { updateUser } from '../modules/middleware';
import { PartialUsers } from '../modules/partial-users';

export const router = Router();

const partial = Deps.get<PartialUsers>(PartialUsers);
const users = Deps.get<Users>(Users);

router.get('/', updateUser, async (req, res) => {
  res.json({
    user: res.locals.user,
    saved: await users.get(res.locals.user)
  });
});

router.get('/:id', async (req, res) => {
  try {
    const user = bot.users.cache.get(req.params.id);
    if (!user)
      throw new APIError(404);

    res.json({
      ...user,
      displayAvatarURL: user.displayAvatarURL({ dynamic: true, size: 256 }),
      presence: user.presence
    });
  } catch (error) { await sendError(req, res, error); }
});

router.get('/:id/partial', async (req, res) => {
  try {
    const user = await partial.get(req.params.id);
    return (user)
      ? res.json(user)
      : sendError(req, res, new APIError(404));
  } catch (error) { await sendError(req, res, error); }
});

router.get('/:id/saved', async (req, res) => {
  try {
    const partialUser = await partial.get(req.params.id);
    const user = await users.get(partialUser);
    res.json(user);
  } catch (error) { await sendError(req, res, error); }
});
