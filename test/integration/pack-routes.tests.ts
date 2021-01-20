import { assert } from 'chai';
import request from 'supertest';
import { app } from '../../src/api/server';
import { BotPackDocument, SavedBotPack } from '../../src/data/models/bot-pack';
import { SavedUser, UserDocument } from '../../src/data/models/user';
import '../mocks/integration-mocks';

describe('/api/routes/pack-routes', () => {
  let savedPack: BotPackDocument;
  let savedUser: UserDocument;

  const endpoint = `/api/v1`;
  const key = 'password_123';

  before(async() => {
    await SavedBotPack.deleteMany({});
    await SavedUser.deleteMany({});

    savedPack = new SavedBotPack();
    savedPack._id = 'bot_pack_123';
    savedPack.name = 'bot_pack_123';
    savedPack.owner = 'test_user_123' as any;
    await savedPack.save();

    await SavedUser.deleteMany({});
    savedUser = await SavedUser.create({ _id: 'test_user_123' });
  });

  after(async() => {
    await SavedBotPack.deleteMany({});
    await SavedUser.deleteMany({});
  });

  describe('GET /packs', () => {
    it('sends array of packs', (done) => {
      request(app)
        .get(`${endpoint}/packs`)
        .expect(200)
        .expect(res => assert(
          Array.isArray(res.body),
          'Response body should be of type array.')
        )
        .end(done);
    });
  });

  describe('GET /packs/:id', () => {
    it('bot pack does not exist, status 404', (done) => {
      request(app)
        .get(`${endpoint}/packs/2318h7j82137h218731g2h3`)
        .expect(404)
        .end(done);
    });

    it('bot pack exists, sends populated bot pack', (done) => {
      request(app)
        .get(`${endpoint}/packs/${savedPack.id}`)
        .expect(200)
        .expect(res => assert(
          'owner' in res.body,
          'Response body should be of type array.')
        )
        .end(done);
    });
  });

  describe('POST /packs', () => {
    it('user not logged in, status 401', (done) => {
      request(app)
        .post(`${endpoint}/packs`)
        .send(savedPack)
        .expect(401)
        .end(done);
    });

    it('duplicate id pack is created, numbers are appended', (done) => {
      request(app)
        .post(`${endpoint}/packs`)
        .set({ Authorization: key })
        .send(savedPack)
        .expect(201)
        .expect(res => assert(
          res.body._id !== savedPack._id,
          'Pack name should be unique.'
        ))
        .end(done);
    });
    
    it('user owns max bot packs, status 400', async () => {
      await SavedBotPack.create(
        { _id: 'bot_pack_124', owner: savedPack.owner },
        { _id: 'bot_pack_125', owner: savedPack.owner },
        { _id: 'bot_pack_126', owner: savedPack.owner },
        { _id: 'bot_pack_127', owner: savedPack.owner },
      );

      savedPack.name = '🤔 this should not work';

      return request(app)
        .post(`${endpoint}/packs`)
        .set({ Authorization: key })
        .send(savedPack)
        .expect(400);
    });
  });

  describe('PATCH /packs/:id', () => {
    it('user not logged in, status 401', (done) => {
      request(app)
        .patch(`${endpoint}/packs/${savedPack.id}`)
        .send(savedPack)
        .expect(401)
        .end(done);
    });

    it('bot pack does not exist, sends 404', (done) => {
      request(app)
        .patch(`${endpoint}/packs/231i9312j38273yh213h21877y323`)
        .send(savedPack)
        .set({ Authorization: key })
        .expect(404)
        .end(done);
    });

    it('body valid, sends updated pack', (done) => {
      savedPack.description = 'Updated bot pack.';

      request(app)
        .patch(`${endpoint}/packs/${savedPack.id}`)
        .send(savedPack)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(
          res.body.updatedAt !== savedPack.updatedAt
          && res.body.description === savedPack.description,
          'Sent pack should be updated.'
        ))
        .end(done);
    });
  });

  describe('DELETE /packs', () => {
    it('user not logged in, status 401', (done) => {
      request(app)
        .delete(`${endpoint}/packs/${savedPack.id}`)
        .send(savedPack)
        .expect(401)
        .end(done);
    });

    it('bot pack does not exist, status 404', (done) => {
      request(app)
        .delete(`${endpoint}/packs/231i9312j38273yh213h21877y323`)
        .send(savedPack)
        .set({ Authorization: key })
        .expect(404)
        .end(done);
    });

    it('pack exists, deletes pack', async () => {
      request(app)
        .delete(`${endpoint}/packs/${savedPack.id}`)
        .set({ Authorization: key })
        .expect(200);

      assert(
        !await SavedBotPack.exists(savedPack),
        'Pack should no longer exist.'
      );
    });
  });

  describe('GET /packs/:id/vote', () => {
    it('user not logged in, status 401', (done) => {
      request(app)
        .get(`${endpoint}/packs/${savedPack.id}/vote`)
        .expect(401)
        .end(done);
    });

    it('pack does not exist, status 404', (done) => {
      request(app)
        .get(`${endpoint}/packs/213h89213218h93217893gh/vote`)
        .set({ Authorization: key })
        .expect(404)
        .end(done);
    });

    it('user already voted, status 429', async () => {
      savedUser.lastVotedAt = new Date();
      await savedUser.save();

      return request(app)
        .get(`${endpoint}/packs/${savedPack.id}/vote`)
        .set({ Authorization: key })
        .expect(429);
    });

    it('pack votes increased by 1', async () => {
      savedUser.lastVotedAt = null;
      await savedUser.save();

      return request(app)
        .get(`${endpoint}/packs/${savedPack.id}/vote`)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(
          res.body.votes === savedPack.votes + 1,
          'Votes should be increased by 1.'
        ));
    });
  });
});
