import { config } from 'dotenv';
config({ path: 'test/.env' });

import { use } from 'chai';
import { connect } from 'mongoose';
import spies from 'chai-spies';

describe.skip('start', async() => {
  before(async() => {
    await connect(process.env.MONGO_URI, {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  });

  await import('./integration/api-routes.tests');
  await import('./integration/bots-routes.tests');
  await import('./integration/pack-routes.tests');
  await import('./integration/manage-bot-routes.tests');
  await import('./integration/stats-routes.tests');
  await import('./integration/user-routes.tests');

  await import('./unit/audit-logger.tests');
  await import('./unit/bot-logs.tests');
  await import('./unit/stats.tests');
  await import('./unit/downtime-detector.tests');
});
