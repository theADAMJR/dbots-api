import { Router } from 'express';
import Deps from '../../utils/deps';
import Users from '../../data/users';
import { sendError, getUser } from '../modules/api-utils';
import { bot } from '../../bot';

export const router = Router();

router.get('/', async (req, res) => {
    try {
        const user = await getUser(req.query.key);
        res.json(user);
    } catch (error) { sendError(res, 400, error); }
});

router.get('/saved', async (req, res) => {
    try {        
        const user = await getUser(req.query.key);
        const savedUser = await Deps.get<Users>(Users).get(user);
        res.json(savedUser);
    } catch (error) { sendError(res, 400, error); }
});

router.get('/:id', (req, res) => {
    try {        
        const user = bot.users.cache.get(req.params.id);
        res.send(user);
    } catch (error) { sendError(res, 400, error); }
});