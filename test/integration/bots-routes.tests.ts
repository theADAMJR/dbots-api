import config from '../../config.json';
import Deps from '../../src/utils/deps';
import Bots from '../../src/data/bots';
import { API, app } from '../../src/api/server';
import request from 'supertest';
import { Listing } from '../../src/data/models/bot';

describe('routes/api/bots', () => {
    let body: Listing;
    let bots: Bots;

    before(() => {
        Deps.get<API>(API);
        bots = Deps.get<Bots>(Bots);

        bots.get(config.tests.botId);
    });

    after(async() => {
        // await bots.delete(config.tests.botId);
    });

    beforeEach(() => {
        Deps.testing = true;
        
        body = {
            body: 'My name jeff 123',
            botId: config.bot.id,
            githubURL: '',
            invite: '1927uhsd',
            overview: 'The best bot the world has ever seen',
            ownerIds: [],
            prefix: '.',
            supportInvite: '289u138',
            tags: [],
            websiteURL: ''
        };
    });

    describe('POST /bots', () => {
        it('no key, sends 400', (done) => {
            request(app)
                .post(`/api/bots`)
                .expect(400)
                .end(done);
        });

        it('invalid key, and valid body, sends 400', (done) => {
            request(app)
                .post(`/api/bots/${config.tests.botId}?key=1234`)
                .send(body)
                .expect(200)
                .end(done);
        });

        it('invalid key, and valid body, sends 400', (done) => {
            request(app)
                .post(`/api/bots/${config.tests.botId}?key=1234`)
                .send(body)
                .expect(200)
                .end(done);
        });

        it('valid key, and valid body, sends 200', (done) => {
            request(app)
                .post(`/api/bots/${config.tests.botId}?key=${config.tests.authKey}`)
                .send(body)
                .expect(200)
                .end(done);
        });
    });

    describe('PUT /bots/:id', () => {
        it('invalid id, sends 404', (done) => {
            request(app)
                .put(`/api/bots/1234?key=${config.tests.authKey}`)
                .expect(404)
                .end(done);
        });

        it('invalid key, sends 400', (done) => {
            request(app)
                .put(`/api/bots/${config.tests.botId}`)
                .expect(400)
                .end(done);
        });

        it('invalid key, and valid body, sends 400', (done) => {
            request(app)
                .put(`/api/bots/${config.tests.botId}?key=1234`)
                .send(body)
                .expect(400)
                .end(done);
        });

        it('invalid key, and valid body, sends 400', (done) => {
            request(app)
                .put(`/api/bots/${config.tests.botId}?key=1234`)
                .send(body)
                .expect(400)
                .end(done);
        });

        it('valid key, and valid body, sends 200', (done) => {
            request(app)
                .put(`/api/bots/${config.tests.botId}?key=${config.tests.authKey}`)
                .send(body)
                .expect(200)
                .end(done);
        });
    });
});
