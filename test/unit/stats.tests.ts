import { LogDocument, SavedLog } from '../../src/data/models/log';
import Stats from '../../src/api/modules/stats';
import '../mocks/unit-mocks';

describe('/api/modules/stats', () => {
  let savedLog: LogDocument;

  beforeEach(async() => {
    savedLog = new SavedLog();
    stats = new Stats();
    
    savedLog.changes.push(
      {
        at: new Date(),
        by: '',
        changes: { old: { prefix: '/' }, new: { prefix: '.' } }
      },
      {
        at: new Date(),
        by: '',
        changes: { old: { prefix: '/' }, new: { prefix: '.' } }
      }, 
      {
        at: new Date(),
        by: '',
        changes: { old: { xpPerMessage: 50 }, new: { xpPerMessage: 100 } }
      }
    );
  });

  describe('recent votes', () => {
    it('', () => {

    })
  });
});