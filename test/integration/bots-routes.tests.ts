import { app } from '../../src/api/server';
import request from 'supertest';
import { BotDocument, SavedBot } from '../../src/data/models/bot';
import { assert } from 'chai';
import '../mocks/integration-mocks';
import { SavedUser, UserDocument } from '../../src/data/models/user';

describe('/api/routes/bots-routes', () => {
	let savedBot: BotDocument;
	let savedUser: UserDocument;

	const endpoint = '/api/v1';
	const key = 'password_123';

	beforeEach(async() => {
		await SavedBot.deleteMany({});
		await SavedUser.deleteMany({});

		savedBot = await SavedBot.create({
			_id: process.env.CLIENT_ID,
			lastVoteAt: new Date(),
			ownerId: 'test_user_123',
			votes: [],
			listing: {
				overview: 'A very cool bot.'
			}
		});
		savedUser = await SavedUser.create({ _id: 'test_user_123' });
	});

	after(async() => {
		await SavedBot.deleteMany({});
		await SavedUser.deleteMany({});
	});
	
	describe('GET /bots', () => {
		it('sends array of API bots', (done) => {
			request(app)
				.get(`${endpoint}/bots`)
				.expect(200)
				.expect(res => assert(
					res.body.saved.length === 1 && res.body.users.length === 1,
					'API bots should be returned.'
				))
				.end(done);
		});
	});

	describe('GET /bots/user', () => {
		it('user not logged in, status 401', (done) => {
			request(app)
				.get(`${endpoint}/bots/user`)
				.expect(401)
				.end(done);
		});

		it('user logged in, sends user bots', (done) => {
			request(app)
				.get(`${endpoint}/bots/user`)
				.set({ Authorization: key })
				.expect(200)
				.expect(res => assert(
					res.body.saved[0]._id === savedBot.id,
					'At least one bot user should be sent.'
				))
				.end(done);
		});
	});

	describe('GET /bots/:id', () => {
		it('no bot found, status 404', (done) => {
			request(app)
				.get(`${endpoint}/bots/213u8991293yh213812y7h3`)
				.expect(404)
				.end(done);
		});

		it('no bot found, status 404', (done) => {
			request(app)
				.get(`${endpoint}/bots/${savedBot.id}`)
				.expect(200)
				.expect(res => assert(
					res.body.user && res.body.saved,
					'Bot user and saved bot should be sent.'
				))
				.end(done);
		});
	});

	describe('GET /bots/:id/vote', () => {
		it('user not logged in, status 401', (done) => {
			request(app)
				.get(`${endpoint}/bots/${savedBot.id}/vote`)
				.expect(401)
				.end(done);
		});

		it('no bot found, status 404', (done) => {
			request(app)
				.get(`${endpoint}/bots/213u8991293yh213812y7h3/vote`)
				.set({ Authorization: key })
				.expect(404)
				.end(done);
		});

		it('user votes, status 200, votes increased by 1', async () => {
			await request(app)
				.get(`${endpoint}/bots/${savedBot.id}/vote`)
				.set({ Authorization: key })
				.expect(200);

			const newSavedBot = await SavedBot.findById(savedBot.id);

			assert(
				savedBot.votes.length < newSavedBot.votes.length
				&& savedBot.totalVotes < newSavedBot.totalVotes,
				'Bot votes should be increased by 1.'
			);
		});

		it('user recently already voted, status 429', async () => {
			savedUser.lastVotedAt = new Date();
			await savedUser.save();

			await request(app)
				.get(`${endpoint}/bots/${savedBot.id}/vote`)
				.set({ Authorization: key })
				.expect(429);
		});
	});

	describe('GET /bots/:id/widget', () => {
		it('bot does not exist, status 404', (done) => {
			request(app)
				.get(`${endpoint}/bots/13u981238921h321783/widget`)
				.expect(404)
				.end(done);
		});

		it('valid bot, sends widget', (done) => {
			request(app)
				.get(`${endpoint}/bots/${savedBot.id}/widget`)
				.expect(200)
				.expect('Content-Type', 'image/png')
				.end(done);
		});
	});
});
