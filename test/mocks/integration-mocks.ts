import { Collection } from 'discord.js';
import { APIError } from '../../src/api/modules/api-utils';
import { auth } from '../../src/api/modules/auth-client';
import { ErrorLogger } from '../../src/api/modules/error-logger';
import { bot } from '../../src/bot';
import Deps from '../../src/utils/deps';
import rateLimit from '../../src/api/modules/rate-limiter';

// comment to log test API errors
(Deps.get(ErrorLogger) as any).api = () => {};
// comment whether to enable test rate limiting
(rateLimit as any).skip = () => true;

const user = {
  id: 'test_user_123',
  username: 'ADAMJR',
  bot: false,
  displayAvatarURL: (...args) => 'https://cdn.discordapp.com/avatars/218459216145285121/a_6c1a5048eb777267175e29735cc729bc.webp',
  presence: {
    status: 'online'
  }
} as any;

auth.getAccess = async (code: string) => {
  if (!code)
    throw new APIError('Code required.', 400);

  return 'password_123';
};
auth.getUser = async (key: string) => {
  if (!key)
    throw new APIError('Key required.', 400);

  return user;
};

bot.users.cache = new Collection([
  [
    'bot_user_123', {
      id: 'bot_user_123',
      username: '4PG',
      bot: true,
      displayAvatarURL: (...args) => 'https://2pg.xyz/assets/img/2pg-avatar-transparent.png'
    } as any
  ],
  [ 'test_user_123', user ]
]);

bot.guilds.cache = new Collection([
  [
    'test_guild_123', {
      id: 'test_guild_123',
      name: '4PG Test Server',
      members: {
        cache: new Collection([[ 'test_user_123', user ]])
      }
    } as any
  ]
]);
