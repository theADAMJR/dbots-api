import request from 'supertest';
import { app } from '../../src/api/server';
import { BotPackDocument, SavedBotPack } from '../../src/data/models/bot-pack';

describe('/src/api/routes/pack-routes', () => {
  let pack: BotPackDocument;
  const endpoint = `http://localhost:${process.env.PORT}/api/v1`;

  before(async() => {
    pack = new SavedBotPack();
    pack._id = 'testing123';
    await pack.save();
  });

  after(async() => {
    await pack.remove();
  });

  describe('GET /packs', () => {
    it('returns array of packs', (done) => {
      request(app)
        .get(`/${endpoint}/packs`)
        .send(pack)
        .expect(200)
        .end(done);
    });
  });

  describe('PATCH /packs', () => {
    it('returns array', (done) => {
      request(app)
        .patch(`${endpoint}/packs`)
        .send({
          ...pack,
          description: 'Updated bot pack.'
        })
        .expect(201)
        .end(done);
    });
  });
});
