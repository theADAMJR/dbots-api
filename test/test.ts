import { config } from 'dotenv';
config({ path: 'test/.env' });

import { connect } from 'mongoose';

describe('start', async() => {
  before(async() => {
    await connect(process.env.MONGO_URI, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  });
    
  await import('./integration/api-routes.tests');
  await import('./integration/pack-routes.tests');
  await import('./integration/stats-routes.tests');
  await import('./integration/bots-routes.tests');
  await import('./integration/manage-bot-routes.tests');

  await import('./unit/stats.tests');
  await import('./unit/audit-logger.tests');
});
