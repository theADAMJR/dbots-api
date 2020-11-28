import { BotAnalytics, LogDocument, SavedLog } from '../../src/data/models/log';
import BotLogs from '../../src/data/bot-logs';
import { expect } from 'chai';

describe('/data/bot-logs', () => {
  let logs: BotLogs;
  let savedLog: LogDocument;

  beforeEach(() => {
    savedLog = new SavedLog({ _id: 'bot_user_123' });
    savedLog.updateOne = (...args: any): any => {};
    savedLog.analytics = new BotAnalytics();

    logs = new BotLogs();
    logs.get = async (...args: any) => savedLog;
  });

  afterEach(() => {
    savedLog = undefined;
  });

  describe('last log days', () => {
    it('last update today, returns 0', () => {
      savedLog.analytics.lastUpdatedAt = new Date();

      const result = logs.lastLogDays(savedLog);
      expect(result).to.equal(0);
    });

    it('last update 2 days ago, returns 2', () => {
      const twoDaysAgo = new Date(new Date().setDate(new Date().getDate() - 2));
      savedLog.analytics.lastUpdatedAt = twoDaysAgo;

      const result = logs.lastLogDays(savedLog);
      expect(result).to.equal(2);
    });

    it('last update 7 days ago, returns 7', () => {
      const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
      savedLog.analytics.lastUpdatedAt = sevenDaysAgo;

      const result = logs.lastLogDays(savedLog);
      expect(result).to.equal(7);
    });
  });
  
  describe('log analytic', () => {
    it('updating impressions, updates ctr', async () => {
      const oldCtr = savedLog.analytics.ctr[0];
      savedLog = await logs.logAnalytic('impressions', savedLog.id);
      savedLog = await logs.logAnalytic('views', savedLog.id);
      const newCtr = savedLog.analytics.ctr[0];

      expect(oldCtr).to.not.equal(newCtr);
    });

    it('updating views, updates ctr', async () => {
      const oldCtr = savedLog.analytics.ctr[0];
      savedLog = await logs.logAnalytic('views', savedLog.id);
      const newCtr = savedLog.analytics.ctr[0];

      expect(oldCtr).to.not.equal(newCtr);
    });

    it('analytics were updated today, increases value', async () => {
      savedLog = await logs.logAnalytic('views', savedLog.id);
      const views = savedLog.analytics.views[0];

      expect(views).to.equal(1);
    });

    it('analytics were not updated for 1 day, fills in 1 blank day', async () => {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      savedLog.analytics.lastUpdatedAt = yesterday;

      savedLog = await logs.logAnalytic('views', savedLog.id);
      const result = savedLog.analytics.views;

      expect(result).to.deep.equal([0,1]);
    });

    it('analytics were not updated for 2 days, fills in 2 blank days', async () => {
      const twoDaysAgo = new Date(new Date().setDate(new Date().getDate() - 2));
      savedLog.analytics.lastUpdatedAt = twoDaysAgo;

      savedLog = await logs.logAnalytic('views', savedLog.id);
      const result = savedLog.analytics.views;

      expect(result).to.deep.equal([0,0,1]);
    });

    it('analytics were not updated for 7 days, fills in 7 blank days', async () => {
      const sevenDaysAgo = new Date(new Date().setDate(new Date().getDate() - 7));
      savedLog.analytics.lastUpdatedAt = sevenDaysAgo;

      savedLog = await logs.logAnalytic('views', savedLog.id);
      const result = savedLog.analytics.views;

      expect(result).to.deep.equal([0,0,0,0,0,0,0,1]);
    });
  });
});
