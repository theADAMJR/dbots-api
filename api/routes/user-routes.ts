import { Router } from 'express';
import { AuthClient } from '../server';
import Deps from '../../utils/deps';
import Users from '../../data/users';
import { sendError } from '../modules/api-utils';
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

export async function getUser(key: any) {
    let authUser: AuthUser = await AuthClient.getUser(key);

    authUser['displayAvatarURL'] = authUser.avatarUrl(64);
    authUser = JSON.parse(JSON.stringify(authUser).replace(/"_(.*?)"/g, '"$1"'));

    return authUser;
}

export interface AuthUser {
    username: string;
    locale: string;
    isMFAEnabled: boolean;
    discriminator: number;
    id: string;
    avatarHash: string;
    userFlags: string[];
    premiumType: string;
    bot: boolean;
    createdTimestamp: number;
    createdAt: string;

    avatarUrl: (size: number) => string;
}
