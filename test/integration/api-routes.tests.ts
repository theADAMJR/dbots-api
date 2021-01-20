import request from 'supertest';
import { app } from '../../src/api/server';
import '../mocks/integration-mocks';

describe('/api/routes/api-routes', () => {
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
    it('no code, status 401', (done) => {
      request(app)
        .get(`${endpoint}/auth`)
        .expect(401)
        .end(done);
    });

    it('valid login code, redirects to dashboard', (done) => {
      request(app)
        .get(`${endpoint}/auth`)
        .query({ code: 'a' })
        .expect(302)
        .end(done);
    });
  });

  describe('GET /login', () => {
    it('redirects to discord', (done) => {
      request(app)
        .get(`${endpoint}/login`)
        .expect(302)
        .end(done);
    });
  });

  describe('ALL *', () => {
    it('GET non existing API url, returns 404', (done) => {
        request(app)
        .get(`${endpoint}/u41u48312h31823`)
        .expect(404)
        .end(done);
    });
    it('POST non existing API url, returns 404', (done) => {
        request(app)
        .post(`${endpoint}/u41u48312h31823`)
        .expect(404)
        .end(done);
    });
  });
});
