import { model, Schema, Document } from 'mongoose';

export interface BotTokenDocument extends Document {
  _id: string;
  token: string;
  voteWebhookURL: string;
}

export const SavedBotToken = model<BotTokenDocument>('botToken', new Schema({
  _id: String,
  token: String,
  voteWebhookURL: String
}));
