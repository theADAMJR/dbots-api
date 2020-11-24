import { LogDocument, SavedLog } from '../../src/data/models/log';
import Stats from '../../src/api/modules/stats';
import Logs from '../../src/data/bot-logs';
import { mock } from 'ts-mockito';
import { expect } from 'chai';

describe('api/modules/stats', () => {
  let savedLog: LogDocument;
  let stats: Stats;

  beforeEach(async() => {
    let logs = mock<Logs>();
    logs.getAll = (): any => [savedLog];

    savedLog = new SavedLog();
    stats = new Stats(logs);
    
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

    await stats.init();
  });
});