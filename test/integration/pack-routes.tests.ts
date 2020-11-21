import Deps from '../../src/utils/deps';
import { API, app } from '../../src/api/server';
import request from 'supertest';
import { BotPackDocument, SavedBotPack } from '../../src/data/models/bot-pack';

describe('/src/api/routes/pack-routes', () => {
  let pack: BotPackDocument;

  before(async() => {
    Deps.get<API>(API);

    pack = new SavedBotPack();
    pack._id = 'testing123';
    await pack.save();
  });

  after(async() => {
    Deps.get<API>(API);
    
    await pack.remove();
  });

  describe('GET /packs', () => {
    it('returns array of packs', (done) => {
      request(app)
        .get(`/api/packs`)
        .send(pack)
        .expect(200)
        .end(done);
    });
  });

  describe('PUT /packs', () => {
    it('returns array', (done) => {
      request(app)
        .put(`/api/packs`)
        .send(pack)
        .expect(200)
        .end(done);
    });
  });
});
