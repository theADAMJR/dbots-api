"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var server_1 = require("../../../../src/api/server");
var deps_1 = __importDefault(require("../../../../src/utils/deps"));
describe('routes/api', function () {
    beforeEach(function () { return deps_1.default.get(server_1.API); });
    describe('/', function () {
        it('returns 200', function (done) {
            supertest_1.default(server_1.app).get('/api')
                .expect(200)
                .end(done);
        });
    });
    describe('/auth', function () {
        it('no code, returns 400', function (done) {
            supertest_1.default(server_1.app).get('/api/auth')
                .expect(400)
                .end(done);
        });
    });
    describe('/user', function () {
        it('no key, returns 400', function (done) {
            supertest_1.default(server_1.app).get('/api/user')
                .expect(400)
                .end(done);
        });
    });
    it('any url returns 404', function (done) {
        supertest_1.default(server_1.app).get('/api/a')
            .expect(404)
            .end(done);
    });
});
