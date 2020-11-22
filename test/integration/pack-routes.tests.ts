import { assert } from 'chai';
import request from 'supertest';
import { app } from '../../src/api/server';
import { BotPackDocument, SavedBotPack } from '../../src/data/models/bot-pack';
import { getObj } from '../test-utils';

describe('/src/api/routes/pack-routes', () => {
  let pack: BotPackDocument;
  const endpoint = `/api/v1`;

  before(async() => {
    pack = new SavedBotPack();
    pack._id = 'testing123';
    await pack.save();
  });

  after(async() => {
    await pack.remove();
  });

  describe('POST /packs', () => {
    const pack = new SavedBotPack();

    it('pack is created', (done) => {
      request(app)
        .post(`${endpoint}/packs`)
        .expect(201)
        .expect([getObj(pack)])
        .end(done);
    });
  });

  describe('GET /packs', () => {
    it('sends array of packs', (done) => {
      request(app)
        .get(`${endpoint}/packs`)
        .expect(200)
        .expect([getObj(pack)])
        .end(done);
    });
  });

  describe('PATCH /packs/:id', () => {
    it('sends updated pack', (done) => {
      pack.description = 'Updated bot pack.';

      request(app)
        .patch(`${endpoint}/packs/${pack.id}`)
        .send(pack)
        .expect(res => assert(
          res.body.updatedAt !== pack.updatedAt
          && res.body.description === pack.description,
          'Sent pack should be updated.'
        ))
        .expect(200)
        .end(done);
    });
  });

  describe('GET /packs/:id/vote', () => {
    it('user not logged in, unauthorized', (done) => {
      request(app)
        .get(`${endpoint}/packs/${pack.id}/vote`)
        .expect(401)
        .end(done);
    });
  });
});
