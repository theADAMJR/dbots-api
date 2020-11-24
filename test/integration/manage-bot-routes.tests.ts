import { app } from '../../src/api/server';
import request from 'supertest';
import { BotDocument, Listing, SavedBot } from '../../src/data/models/bot';
import '../mocks';

describe('routes/api/bots/manage-bot-routes', () => {
  let savedBot: BotDocument;
	const botId = 'bot_user_123';
	const endpoint = '/api/v1';

    beforeEach(async () => {
      savedBot = await SavedBot.create({
        _id: botId, 
        body: {
            body: 'My name jeff 123',
            botId,
            githubURL: '',
            invite: '1927uhsd',
            overview: 'The best bot the world has ever seen',
            ownerId: 'test_user_123',
            prefix: '.',
            supportInvite: '289u138',
            tags: [],
            websiteURL: ''
        }
      });
    });

  after(async() => {
		await SavedBot.deleteMany({});
	});	
  
  describe('POST /bots', () => {
    it('no key, status 400', (done) => {
      request(app)
        .post(`${endpoint}/bots`)
        .expect(400)
        .end(done);
    });

    it('invalid key, and valid body, status 400', (done) => {
      request(app)
        .post(`${endpoint}/bots/${botId}?key=1234`)
        .send(savedBot.listing)
        .expect(200)
        .end(done);
    });

    it('invalid key, and valid body, status 400', (done) => {
      request(app)
        .post(`${endpoint}/bots/${botId}?key=1234`)
        .send(savedBot.listing)
        .expect(200)
        .end(done);
    });

    it('valid key, and valid body, status 200', (done) => {
      request(app)
        .post(`${endpoint}/bots/${botId}`)
        .send(savedBot.listing)
        .expect(200)
        .end(done);
    });
  });

  describe('PUT /bots/:id', () => {
    it('bot not found, status 404', (done) => {
      request(app)
        .patch(`/api/bots/8912j39812yh3983yh128`)
        .expect(404)
        .end(done);
    });

    it('user not logged in, status 401', (done) => {
      request(app)
        .patch(`${endpoint}/bots/${botId}`)
        .expect(401)
        .end(done);
    });

    it('user logged in, and valid body, sends ', (done) => {
      request(app)
        .patch(`${endpoint}/bots/${botId}`)
        .send(savedBot.listing)
        .expect(200)
        .end(done);
    });
  });
});