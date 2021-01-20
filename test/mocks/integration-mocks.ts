import { Collection } from 'discord.js';
import { APIError } from '../../src/api/modules/api-utils';
import { auth } from '../../src/api/modules/auth-client';
import { ErrorLogger } from '../../src/api/modules/error-logger';
import { bot } from '../../src/bot';
import Deps from '../../src/utils/deps';
import rateLimit from '../../src/api/modules/rate-limiter';
import { PartialUsers } from '../../src/api/modules/partial-users';

// comment to log test API errors
(Deps.get(ErrorLogger) as any).api = () => {};
// comment whether to enable test rate limiting
(rateLimit as any).skip = () => true;

const user = {
  avatar: '2j94321yu7392173y128731',
  id: 'test_user_123',
  username: 'ADAMJR',
  bot: false,
  discriminator: '0001',
  displayAvatarURL: (...args) => 'https://cdn.discordapp.com/avatars/218459216145285121/a_6c1a5048eb777267175e29735cc729bc.webp',
  presence: {
    status: 'online'
  }
} as any;

auth.getAccess = async (code: string) => {
  if (!code)
    throw new APIError(400);

  return 'password_123';
};
auth.getUser = async (key: string) => {
  if (!key)
    throw new APIError(400);

  return user;
};

bot.users.cache = new Collection([
  [
    process.env.CLIENT_ID, {
      avatar: '2j94321yu7392173y128731',
      id: process.env.CLIENT_ID,
      username: '4PG',
      bot: true,
      discriminator: '0001',
      displayAvatarURL: (...args) => 'https://2pg.xyz/assets/img/2pg-avatar-transparent.png'
    } as any,
  ],
  [
    'bot_user_321', {
      avatar: '2j94321yu7392173y128731',
      id: 'bot_user_321',
      username: '5PG',
      bot: true,
      discriminator: '0001',
      displayAvatarURL: (...args) => 'https://2pg.xyz/assets/img/2pg-avatar-transparent.png'
    } as any
  ],
  [ 'test_user_123', user ],
]);

(Deps.get<PartialUsers>(PartialUsers) as any)
  .get = async (id: string) => bot.users.cache.get(id);

bot.guilds.cache = new Collection([
  [
    'test_guild_123', {
      id: 'test_guild_123',
      name: '4PG Test Server',
      members: {
        cache: new Collection(bot.users.cache.entries() as any)
      },
      fetchBan: (...args) => {
        throw new TypeError('Member is not banned');
      }
    } as any
  ]
]);
