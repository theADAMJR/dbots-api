import { model, Schema, Document } from 'mongoose';

export class Change {
  public at = new Date();

  constructor(
  public by: string,
  public changes: { old: {}, new: {}}) {}
}

export type Analytic = 'ctr' | 'impressions' | 'invites' | 'views';

export class BotAnalytics {
  ctr = [0]; // views / impressions
  impressions = [0]; // how many people see the bot
  invites = [0]; // % of viewers that invite the bot
  inviteRate = [0]; // % of viewers that invite the bot
  views = [0]; // number of bot page views
  lastUpdatedAt = new Date();
}

export interface LogDocument extends Document {
  _id: string;
  changes: Change[];
  analytics: BotAnalytics;
}

export const SavedLog = model<LogDocument>('log', new Schema({
  _id: String,
  analytics: { type: Object, default: new BotAnalytics() },
  changes: { type: Array, default: [] },
}));
