import { Collection } from 'discord.js';
import { ErrorLogger } from '../src/api/modules/error-logger';
import { AuthClient } from '../src/api/server';
import { bot } from '../src/bot';
import Deps from '../src/utils/deps';

(Deps.get(ErrorLogger) as any).api = () => {};

const user = {
  id: 'test_user_123',
  username: 'ADAMJR',
  bot: false
} as any;

AuthClient.getUser = async (key: string) => {
  if (!key)
    throw new TypeError('Key required.');

  return user;
};

bot.users.cache = new Collection([
  [
    'bot_user_123', {
      id: 'bot_user_123',
      username: '4PG',
      displayAvatarURL: (...args) => ''
    } as any
  ],
  [
    'test_user_123', user
  ]
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
