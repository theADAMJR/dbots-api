import { Collection } from 'discord.js';
import { AuthClient } from '../src/api/server';
import { bot } from '../src/bot';

AuthClient.getUser = async (key: string) => {
  if (!key)
    throw new TypeError('Key required.');

  return {
    id: 'test_user_123',
    username: 'ADAMJR',
    bot: false
  } as any;
};

bot.users.cache = new Collection([
  [
    'bot_user_123', {
      id: 'bot_user_123',
      username: '4PG',
      displayAvatarURL: (...args) => ''
    } as any
  ]
]);
