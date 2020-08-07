import rateLimit from 'express-rate-limit';
import rateLimitStore from '@lykmapipo/rate-limit-mongoose';
import config from '../../../config.json';

const windowMs = 1 * 60 * 1000;
export default rateLimit({
    store: rateLimitStore({ windowMs }),
    max: 180,
    message: `You are being rate limited.`,
    skip: (req) => config.api.whiteListedIPs.some(ip => ip === req.ip)
});