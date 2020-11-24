import { assert } from 'chai';
import request from 'supertest';
import { app } from '../../src/api/server';
import { BotPackDocument, SavedBotPack } from '../../src/data/models/bot-pack';
import { SavedUser } from '../../src/data/models/user';
import '../mocks';

describe('/src/api/routes/pack-routes', () => {
  let pack: BotPackDocument;
  const endpoint = `/api/v1`;
  const key = 'password_123';

  before(async() => {
    pack = new SavedBotPack();
    pack._id = 'bot_pack_123';
    pack.owner = 'test_user_123' as any;
    await pack.save();
  });

  after(async() => {
    await SavedBotPack.deleteMany({});
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

  describe('POST /packs', () => {
    it('duplicate id pack is created, name is changed', (done) => {
      request(app)
        .post(`${endpoint}/packs`)
        .set({ Authorization: key })
        .send(pack)
        .expect(201)
        .expect(res => assert(
          res.body._id.startsWith(pack._id),
          'Pack name should be unique.'
        ))
        .end(done);
    });
  });

  describe('PATCH /packs/:id', () => {
    it('sends updated pack', (done) => {
      pack.description = 'Updated bot pack.';

      request(app)
        .patch(`${endpoint}/packs/${pack.id}`)
        .send(pack)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(
          res.body.updatedAt !== pack.updatedAt
          && res.body.description === pack.description,
          'Sent pack should be updated.'
        ))
        .end(done);
    });

    it('bot pack does not exist, sends 404', (done) => {
      request(app)
        .patch(`${endpoint}/packs/231i9312j38273yh213h21877y323`)
        .send(pack)
        .set({ Authorization: key })
        .expect(404)
        .end(done);
    });
  });

  describe('DELETE /packs', () => {
    it('deletes pack id', async () => {
      request(app)
        .delete(`${endpoint}/packs/${pack.id}`)
        .set({ Authorization: key })
        .expect(200);

      assert(
        !await SavedBotPack.exists(pack),
        'Pack should no longer exist.'
      );
    });

    it('bot pack does not exist, sends 404', (done) => {
      request(app)
        .delete(`${endpoint}/packs/231i9312j38273yh213h21877y323`)
        .send(pack)
        .set({ Authorization: key })
        .expect(404)
        .end(done);
    });
  });

  describe('GET /packs/:id/vote', () => {
    it('pack votes increased by 1', async () => {
      const savedUser = await SavedUser.findById('test_user_123');
      savedUser.lastVotedAt = null;
      await savedUser.save();

      return request(app)
        .get(`${endpoint}/packs/${pack.id}/vote`)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(
          res.body.votes === pack.votes + 1,
          'Votes should be increased by 1.'
        ));
    });

    it('user already voted, status 400', (done) => {
      request(app)
        .get(`${endpoint}/packs/${pack.id}/vote`)
        .set({ Authorization: key })
        .expect(400)
        .end(done);
    });
  });
});
