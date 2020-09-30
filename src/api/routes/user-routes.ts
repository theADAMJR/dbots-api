import { Router } from 'express';
import Deps from '../../utils/deps';
import Users from '../../data/users';
import { sendError } from '../modules/api-utils';
import { bot } from '../../bot';
import { updateUser } from '../modules/middleware';

export const router = Router();

const users = Deps.get<Users>(Users);

router.get('/', updateUser, async (req, res) => res.json(res.locals.user));

router.get('/saved', updateUser, async (req, res) => {
    try {
        const savedUser = await users.get(res.locals.user);
        res.json(savedUser);
    } catch (error) { sendError(res, 400, error); }
});

router.get('/:id', (req, res) => {
    try {        
        const user = bot.users.cache.get(req.params.id);
        res.send(user);
    } catch (error) { sendError(res, 400, error); }
});