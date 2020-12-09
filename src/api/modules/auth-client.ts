import OAuthClient from '@2pg/oauth';

export const auth = new OAuthClient({
  id: process.env.CLIENT_ID,
  secret: process.env.BOT_SECRET,
  redirectURI: `${process.env.API_URL}/auth`,
  scopes: ['identify']
});
