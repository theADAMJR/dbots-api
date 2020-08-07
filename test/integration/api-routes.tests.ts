import request from 'supertest';
import { API, app } from '../../src/api/server';
import Deps from '../../src/utils/deps';

describe('routes/api', () => {
    beforeEach(() => Deps.get<API>(API));

    describe('/', () => {
        it('returns 200', (done) => {
            request(app).get('/api')
                .expect(200)
                .end(done);
        });
    });

    describe('/auth', () => {
        it('no code, returns 400', (done) => {
            request(app).get('/api/auth')
                .expect(400)
                .end(done);
        });
    });
    
    describe('/user', () => {
        it('no key, returns 400', (done) => {
            request(app).get('/api/user')
                .expect(400)
                .end(done);
        });
    });
    
    it('any url returns 404', (done) => {
        request(app).get('/api/a')
            .expect(404)
            .end(done);
    });
});
