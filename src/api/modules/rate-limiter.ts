import rateLimit from 'express-rate-limit';
import RateLimitStore from 'rate-limit-mongo';

export default rateLimit({
  max: 300,
  message: 'You are being rate limited.',
  store: new RateLimitStore({
    uri: process.env.MONGO_URI || 'mongodb://localhost/DBots'
  }),
  windowMs: 60 * 1000
});
