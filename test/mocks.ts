import { AuthClient } from '../src/api/server';

AuthClient.getUser = async (key: string) => {
  if (!key)
    throw new TypeError('Key required.');

  return {
    id: 'test_user_123',
    username: 'ADAMJR',
    bot: false
  } as any;
};