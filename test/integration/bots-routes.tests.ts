import { app } from '../../src/api/server';
import request from 'supertest';
import { Listing, SavedBot } from '../../src/data/models/bot';
import { expect } from 'chai';
import '../mocks';

describe('routes/api/bots', () => {
	let body: Listing;
	const botId = 'bot_user_123';
	const endpoint = '/api/v1';

    beforeEach(async() => {
		await SavedBot.create({
			_id: 'bot_user_123',
			lastVoteAt: new Date(),
			votes: []
		})
    });

    after(async() => {
		await SavedBot.deleteMany({});
	});
	
	describe('GET /bots', () => {
		it('sends array of API bots', (done) => {
            request(app)
                .get(`${endpoint}/bots`)
				.expect(200)
				.expect(res => expect(res.body.saved.length).to.equal(1))
                .end(done);
		});
	});
});
