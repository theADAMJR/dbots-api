import request from 'supertest';
import { app } from '../../src/api/server';
import '../mocks';

describe('routes/api', () => {
  const endpoint = `/api/v1`;

  describe('GET /', () => {
    it('status 200, hello earth', (done) => {
      request(app)
        .get(endpoint)
        .expect(200)
        .expect({ hello: 'earth' })
        .end(done);
    });
  });

  describe('GET /auth', () => {
    it('no code, status 400', (done) => {
      request(app)
        .get(`${endpoint}/auth`)
        .expect(400)
        .end(done);
    });

    it('valid login code, redirects to dashboard', (done) => {
      request(app)
        .get(`${endpoint}/auth?code=a`)
        .expect(200)
        .redirects(1)
        .end(done);
    });
  });
  
  describe('GET /user', () => {
    it('no key, status 400', (done) => {
      request(app)
        .get('/api/user')
        .expect(400)
        .end(done);
    });
  });
  
  it('non existing API url, returns 404', (done) => {
    request(app)
      .get(`${endpoint}/u41u48312h31823`)
      .expect(404)
      .expect({ code: 404, message: 'Not found.' })
      .end(done);
  });
});
