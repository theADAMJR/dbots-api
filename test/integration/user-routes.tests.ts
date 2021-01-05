import { assert } from 'chai';
import request from 'supertest';
import { app } from '../../src/api/server';
import { SavedUser, UserDocument } from '../../src/data/models/user';
import '../mocks/integration-mocks';

describe('/api/routes/user-routes', () => {
  let savedUser: UserDocument;

  const key = 'password_123';
  const endpoint = `/api/v1`;

  beforeEach(async() => {
    await cleanDatabase();

    savedUser = await SavedUser.create({ _id: 'test_user_123' });
  });

  after(() => cleanDatabase());
  
  describe('GET /user', () => {
    it('no key, no user, status 200', (done) => {
      request(app)
        .get(`${endpoint}/user`)
        .expect(200)
        .expect(res => assert(!res.body.user, 'There is no user to return.'))
        .end(done);
    });

    it('valid key, sends user, status 200', (done) => {
      request(app)
        .get(`${endpoint}/user`)
        .set({ Authorization: key })
        .expect(200)
        .expect(res => assert(res.body.user, 'User should be returned.'))
        .end(done);
    });
  });

  describe('GET /user/:id', () => {
    it('non existing user, status 404', (done) => {
      request(app)
        .get(`${endpoint}/user/219y732183g2187321g3`)
        .expect(404)
        .end(done);
    });

    it('user exists, sends user', (done) => {
      request(app)
        .get(`${endpoint}/user/${savedUser.id}`)
        .expect(200)
        .expect(res => assert(res.body.id, 'User should be sent.'))
        .end(done);
    });
  });

  describe('GET /user/:id/partial', () => {
    it('non existing user, status 404', (done) => {
      request(app)
        .get(`${endpoint}/user/219y732183g2187321g3/partial`)
        .expect(404)
        .end(done);
    });
    
    it('existing user, status 200', (done) => {
      request(app)
        .get(`${endpoint}/user/${process.env.CLIENT_ID}/partial`)
        .expect(200)
        .end(done);
    });
  });
});

async function cleanDatabase() {
  await SavedUser.deleteMany({});
}
