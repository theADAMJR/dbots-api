import rateLimit from 'express-rate-limit';
import rateLimitStore from '@lykmapipo/rate-limit-mongoose';
import config from '../../../config.json';

const whiteListedIPs = ['::1', '.', '::ffff:127.0.0.1'];

const windowMs = 10 * 60 * 1000;
export default rateLimit({
    store: rateLimitStore({ windowMs }),
    max: 600,
    message: `You are being rate limited.`,
    skip: (req) => whiteListedIPs.some(ip => ip === req.ip)
});