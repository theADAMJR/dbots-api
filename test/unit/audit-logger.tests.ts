import AuditLogger from '../../src/api/modules/audit-logger';
import { expect } from 'chai';

describe('/api/modules/audit-logger', () => {
  let auditLogger: AuditLogger;

  beforeEach(() => auditLogger = new AuditLogger());

  it('no changes, empty array returned', () => {
    const values = {
      old: { a: 'a', b: 'b' },
      new: { a: 'a', b: 'b' }
    };

    const expected = { old: {}, new: {} };
    const result = auditLogger.getChanges(values, '123').changes;

    expect(result).to.deep.equal(expected);
  });
  
  it('1 change, 1 change returned', () => {
    const values = {
      old: { a: 'a', b: 'b' },
      new: { a: 'b', b: 'b' }
    };

    const expected = {
      old: { a: 'a' },
      new: { a: 'b' }
    };
    const result = auditLogger.getChanges(values, '123').changes;

    expect(result).to.deep.equal(expected);
  });
  
  it('2 changes, 2 changes returned', () => {
    const values = {
      old: { a: 'a', b: 'b', c: 'c' },
      new: { a: '1', b: '2', c: 'c' }
    };

    const result = auditLogger.getChanges(values, '123').changes;
    const expected = {
      old: { a: 'a', b: 'b' },
      new: { a: '1', b: '2' }
    };

    expect(result).to.deep.equal(expected);
  });
  
  it('3 changes, 3 changes returned', () => {
    const values = {
      old: { a: 'a', b: 'b', c: 'c' },
      new: { a: '1', b: '2', c: '3' }
    };

    const result = auditLogger.getChanges(values, '123').changes;

    expect(result).to.deep.equal(values);
  });
  
  it('1 array changed, 1 change returned', () => {
    const values = {
      old: { a: [1,2,3] },
      new: { a: [1,2] }
    };

    const result = auditLogger.getChanges(values, '123').changes;

    expect(result).to.deep.equal(values);
  });
});
