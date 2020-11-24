import { assert } from 'chai';
import request from 'supertest';
import { app } from '../../src/api/server';
import { BotDocument, SavedBot } from '../../src/data/models/bot';
import { BotTokenDocument, SavedBotToken } from '../../src/data/models/bot-token';
import { SavedLog } from '../../src/data/models/log';
import '../mocks';

describe('/src/api/routes/bots/stats-routes', () => {
  let savedBot: BotDocument;
  let savedToken: BotTokenDocument;
  const key = 'password_123';
  const endpoint = `/api/v1`;
  const apiKey = 'secure_api_key_123';

  before(async() => {
    savedBot = await SavedBot.create({
      _id: 'bot_user_123',
      approvedAt: new Date(),
      createdAt: new Date(),
      ownerId: 'test_user_123',
      totalVotes: 0,
      stats: { guildCount: 0 },
      votes: []
    });

    await SavedLog.create({ _id: savedBot.id });
    savedToken = await SavedBotToken.create({ _id: savedBot._id, token: apiKey });
  });

  after(async() => {
    await SavedBot.deleteMany({});
    await SavedBotToken.deleteMany({});
    await SavedLog.deleteMany({});
  });

  describe('GET /stats', () => {
    it('sends bot stats, status 200', (done) => {
      request(app)
        .get(`${endpoint}/bots/${savedBot.id}/stats`)
        .expect(200)
        .expect(res => assert(
          'general' in res.body,
          'Response body should return stats.')
        )
        .end(done);
    });
  });

  describe('POST /stats', () => {
    it('bot does not exist, status 404', (done) => {
      request(app)
        .post(`${endpoint}/bots/12j083921478y132h84723/stats`)
        .expect(404)
        .end(done);
    });

    it('api token is not provided, status 401', (done) => {
      request(app)
        .post(`${endpoint}/bots/${savedBot.id}/stats`)
        .expect(401)
        .end(done);
    });

    it('update bot stats, sends new bot stats', (done) => {
      request(app)
        .post(`${endpoint}/bots/${savedBot.id}/stats`)
        .set({ 'Authorization': apiKey })
        .send({ guildCount: 123 })
        .expect(200)
        .expect({ guildCount: 123 })
        .end(done);
    });
  });

  describe('GET /log', () => {
    it('get bot log, sends bot log', (done) => {
      request(app)
        .get(`${endpoint}/bots/${savedBot.id}/log`)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(
          'changes' in res.body,
          'Response body should return bot log.'
        ))
        .end(done);
    });
  });

  describe('GET /key', () => {
    it('get bot log, sends bot log', (done) => {
      request(app)
        .get(`${endpoint}/bots/${savedBot.id}/key`)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(
          res.body === apiKey,
          'Response body should return API key.'
        ))
        .end(done);
    });
  });

  describe('GET /key', () => {
    it('get bot log, sends bot log', (done) => {
      request(app)
        .get(`${endpoint}/bots/${savedBot.id}/key/regen`)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(
          res.body !== apiKey,
          'Response body should return new API key.'
        ))
        .end(done);
    });
  });
});
