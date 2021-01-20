import { BotDocument } from '../../data/models/bot';

export default class Stats {
  general(savedBot: BotDocument): GeneralStats {
    return {
      approvedAt: savedBot.approvedAt,
      guildCount: savedBot.stats?.guildCount,
      lastVoteAt: savedBot.lastVoteAt,
      totalVotes: savedBot.totalVotes,
      voteCount: savedBot.votes.length
    }
  }

  recentVotes(savedBot: BotDocument): VoteStats[] {
    return Array(7)
      .fill(new Date())
      .map((today, i) => new Date(today - 8.64e7 * i))
      .map((date) => ({
        day: `${date.getDate().toString().padStart(2, '0')
          }/${(date.getMonth() + 1).toString().padStart(2, '0')}`,
        count: savedBot.votes
          .filter(v => v.at?.getDate() === date?.getDate()).length }))
      .reverse();
  }

  topVoters(savedBot: BotDocument): TopVoterStats[] {
    return savedBot.votes
      .map(c => c.by)
      .filter((v, i, a) => a.indexOf(v) === i)
      .map(id => ({
        userId: id,
        count: savedBot.votes.filter(v => v.by === id).length
      }));
  }
}

export interface GeneralStats {
  approvedAt: Date;
  guildCount: number;
  lastVoteAt: Date;
  totalVotes: number;
  voteCount: number;
}

export interface TopVoterStats {
  count: number;
  userId: string;
}

export interface VoteStats {
  count: number;
  day: string;
}
