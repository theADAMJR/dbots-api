import { app } from '../../src/api/server';
import request from 'supertest';
import { BotDocument, SavedBot } from '../../src/data/models/bot';
import { assert } from 'chai';
import {  SavedBotToken } from '../../src/data/models/bot-token';
import { SavedLog } from '../../src/data/models/log';
import { SavedUser, UserDocument } from '../../src/data/models/user';
import '../mocks/integration-mocks';

describe('/api/routes/bots/manage-bot-routes', () => {
  let savedBot: BotDocument;
  let savedUser: UserDocument;

  const key = 'password_123';
	const botId = process.env.CLIENT_ID;
	const endpoint = '/api/v1';

  beforeEach(async () => {
    await cleanDatabase();

    savedUser = await SavedUser.create({ _id: 'test_user_123' });
    savedBot = await SavedBot.create({
      _id: botId,
      body: {
        body: 'My name jeff 123',
        botId,
        githubURL: '',
        invite: '1927uhsd',
        overview: 'The best bot the world has ever seen',
        ownerId: savedUser.id,
        prefix: '.',
        supportInvite: '289u138',
        tags: [],
        websiteURL: ''
      },
      ownerId: savedUser.id
    });
    await SavedBotToken.create({ _id: botId, token: 'secure_api_key_123' });
  });

  afterEach(() => cleanDatabase());
  
  describe('POST /bots', () => {
    it('user not logged in, status 401', (done) => {
      request(app)
        .post(`${endpoint}/bots`)
        .expect(401)
        .end(done);
    });

    it('user adds a non bot user, sends 400', (done) => {
      request(app)
        .post(`${endpoint}/bots`)
        .set({ Authorization: key })
        .send({ botId: 'test_user_123' })
        .expect(400)
        .end(done);
    });

    it('user logged in, and valid body, sends new bot', (done) => {
      request(app)
        .post(`${endpoint}/bots`)
        .set({ Authorization: key })
        .send({ ...savedBot.listing, botId: 'bot_user_321' })
        .expect(201)
        .expect(res => assert(
          '_id' in res.body,
          'Saved bot should deep equal res body.'
        ))
        .end(done);
    });
  });

  describe('PATCH /bots/:id', () => {
    it('user not logged in, status 401', (done) => {
      request(app)
        .patch(`${endpoint}/bots/${botId}`)
        .expect(401)
        .end(done);
    });

    it('bot not manageable, status 403', (done) => {
      request(app)
        .patch(`${endpoint}/bots/23u981ji973yg1381t623871t237183`)
        .set({ Authorization: key })
        .expect(403)
        .end(done);
    });

    it('valid body, sends updated bot', async () => {
      await SavedBot.updateOne({ _id: botId }, { $set: { ownerId: 'test_user_123' } });

      return request(app)
        .patch(`${endpoint}/bots/${botId}`)
        .send(savedBot.listing)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(
          '_id' in res.body,
          'Should return saved bot.'
        ));
    });
  });

  describe('DELETE /bots/:id', () => {
    it('user not logged in, status 401', (done) => {
      request(app)
        .delete(`${endpoint}/bots/${botId}`)
        .expect(401)
        .end(done);
    });

    it('bot not manageable, status 403', (done) => {
      request(app)
        .delete(`${endpoint}/bots/2j3u8183yh1283gh7128371`)
        .set({ Authorization: key })
        .expect(403)
        .end(done);
    });

    it('bot manageable, deletes bot, sends default response', (done) => {
      request(app)
        .delete(`${endpoint}/bots/${botId}`)
        .set({ Authorization: key })
        .expect(200)
        .expect({ code: 200, message: 'Success!' })
        .end(done);
    });
  });
});

async function cleanDatabase() {
  await SavedBot.deleteMany({});
  await SavedBotToken.deleteMany({});
  await SavedLog.deleteMany({});
  await SavedUser.deleteMany({});
}
