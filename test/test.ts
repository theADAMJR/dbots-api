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
    
  await import('./integration/pack-routes.tests');
})