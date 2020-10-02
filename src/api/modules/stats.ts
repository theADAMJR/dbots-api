import Deps from '../../utils/deps';
import Bots from '../../data/bots';
import { BotDocument } from '../../data/models/bot';

const distinct = (v, i, a) => a.indexOf(v) === i;

export default class Stats {
  private savedBots: BotDocument[] = [];

  general(id: string): GeneralStats {
    const savedBot = this.savedBots.find(b => b.id === id);
    if (!savedBot)
      return null;
    
    return {
      approvedAt: savedBot.approvedAt,
      guildCount: savedBot.stats.guildCount,
      lastVoteAt: savedBot.lastVoteAt,
      totalVotes: savedBot.totalVotes,
      voteCount: savedBot.votes.length
    }
  }

  votes(id: string) {
    return this.savedBots
      .find(b => b.id === id)?.votes;
  }

  recentVotes(id: string): VoteStats[] {
    const savedBot = this.savedBots.find(b => b.id === id);
    if (!savedBot)
      return null;

    return Array(7)
      .fill(new Date())
      .map((today, i) => new Date(today - 8.64e7 * i))
      .map(date => ({
        day: `${
          date.getDate()
            .toString()
            .padStart(2, '0')}/${
          (date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}`,
        count: savedBot.votes
          .filter(v => v.at?.getDate() === date?.getDate()).length }))
      .reverse();
  }

  topVoters(id: string): TopVoterStats[] {
    const savedBot = this.savedBots.find(b => b.id === id);
    if (!savedBot)
      return null;

    return savedBot.votes
      .map(c => c.by)
      .filter(distinct)
      .map(id => ({ userId: id, count: savedBot.votes.filter(v => v.by = id).length }));
  }

  constructor(private bots = Deps.get<Bots>(Bots)) {}

  async init() {
    await this.updateValues();

    const interval = 5 * 60 * 1000;
    setInterval(() => this.updateValues(), interval);
  }

  async updateValues() {
    this.savedBots = await this.bots.getAll();
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