import Stats from '../../src/api/modules/stats';
import Bots from '../../src/data/bots';
import { SavedUser, UserDocument } from '../../src/data/models/user';
import { mock } from 'ts-mockito';
import { BotDocument, SavedBot } from '../../src/data/models/bot';
import { expect } from 'chai';

describe('/api/modules/stats', () => {
  let savedBot: BotDocument;
  let savedUser: UserDocument;
  let stats: Stats;

  beforeEach(async() => {
    savedBot = new SavedBot({
      _id: process.env.CLIENT_ID,
      approvedAt: new Date(),
      stats: {
        guildCount: 0
      },
      totalVotes: 0,
      voteCount: 0
    });
    savedUser = new SavedUser({
      _id: 'test_user_123'
    });
    
    stats = new Stats();
  });

  describe('general', () => {
    it('contains appropriate properties', () => {
      const result = stats.general(savedBot);
      expect(result).to.have
        .keys('approvedAt', 'guildCount', 'lastVoteAt', 'totalVotes', 'voteCount');
    });
  });

  describe('recent votes', () => {
    it('no votes, returns array of 7', () => {
      const result = stats.recentVotes(savedBot);
      expect(result.length).to.equal(7);
    });

    it('0 votes on 1 day, returns 0 vote count for day', () => {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      savedBot.votes.push(
        { at: new Date(yesterday), by: savedUser.id },
        { at: new Date(yesterday), by: 'test_user_321' },
      );      

      const secondVoteCount = stats.recentVotes(savedBot)[0].count;
      expect(secondVoteCount).to.equal(0);
    });

    it('1 vote on 1 day, returns 1 vote count for day', () => {
      savedBot.votes.push({ at: new Date(), by: savedUser.id });

      const result = stats.recentVotes(savedBot)[6].count;
      expect(result).to.equal(1);
    });

    it('2 votes today, returns 2 vote count for day', () => {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      savedBot.votes.push(
        { at: yesterday, by: savedUser.id },
        { at: new Date(), by: savedUser.id },
        { at: new Date(), by: 'test_user_321' }
      );

      const secondVoteCount = stats.recentVotes(savedBot)[6].count;
      expect(secondVoteCount).to.equal(2);
    });
  });

  describe('top voters', () => {
    it('0 votes, returns empty array', () => {
      const result = stats.topVoters(savedBot);
      expect(result).to.be.empty;
    });

    it('1 vote, returns 1 top voter stats', () => {
      savedBot.votes.push({ at: new Date(), by: savedUser.id });

      const result = stats.topVoters(savedBot);
      expect(result).to.deep.equal([
        { count: 1, userId: savedUser.id }
      ]);
    });

    it('2 votes by same users, returns 2 top voter stats', () => {
      savedBot.votes.push(
        { at: new Date(), by: savedUser.id },
        { at: new Date(), by: savedUser.id }
      );

      const result = stats.topVoters(savedBot);
      expect(result).to.deep.equal([
        { count: 2, userId: savedUser.id }
      ]);
    });

    it('2 votes by different users, returns 2 top voter stats', () => {
      savedBot.votes.push(
        { at: new Date(), by: savedUser.id },
        { at: new Date(), by: 'test_user_321' }
      );

      const result = stats.topVoters(savedBot);
      expect(result).to.deep.equal([
        { count: 1, userId: savedUser.id },
        { count: 1, userId: 'test_user_321' }
      ]);
    });

    it('competitive votes by 3 different users, returns top voter array', () => {
      savedBot.votes.push(
        { at: new Date(), by: savedUser.id },
        { at: new Date(), by: savedUser.id },
        { at: new Date(), by: savedUser.id },
        { at: new Date(), by: 'test_user_321' },
        { at: new Date(), by: 'test_user_111' }
      );

      const result = stats.topVoters(savedBot);
      expect(result).to.deep.equal([
        { count: 3, userId: savedUser.id },
        { count: 1, userId: 'test_user_321' },
        { count: 1, userId: 'test_user_111' },
      ]);
    });
  });
});
