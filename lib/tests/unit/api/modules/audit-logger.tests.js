"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var audit_logger_1 = __importDefault(require("../../../../src/api/modules/audit-logger"));
var chai_1 = require("chai");
describe('api/modules/audit-logger', function () {
    it('no changes, empty array returned', function () {
        var values = {
            old: { a: 'a', b: 'b' },
            new: { a: 'a', b: 'b' }
        };
        var expected = { old: {}, new: {} };
        var result = audit_logger_1.default.getChanges(values, 'a', '123').changes;
        chai_1.expect(result).to.deep.equal(expected);
    });
    it('1 change, 1 change returned', function () {
        var values = {
            old: { a: 'a', b: 'b' },
            new: { a: 'b', b: 'b' }
        };
        var expected = {
            old: { a: 'a' },
            new: { a: 'b' }
        };
        var result = audit_logger_1.default.getChanges(values, 'a', '123').changes;
        chai_1.expect(result).to.deep.equal(expected);
    });
    it('3 changes, 3 changes returned', function () {
        var values = {
            old: {
                a: 'a',
                b: 'b',
                c: 'c'
            },
            new: {
                a: '1',
                b: '2',
                c: '3'
            }
        };
        var expected = values;
        var result = audit_logger_1.default.getChanges(values, 'a', '123').changes;
        chai_1.expect(result).to.deep.equal(expected);
    });
});
