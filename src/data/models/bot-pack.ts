import { model, Schema, Document } from 'mongoose';
import { BotDocument } from './bot';
import { UserDocument } from './user';

export interface BotPackDocument extends Document {
  _id: string;
  bots: BotDocument[];
  createdAt: Date;
  updatedAt: Date;
  owner: UserDocument;
  votes: number;
}

export const SavedBotPack = model<BotPackDocument>('botPack', new Schema({
  _id: String,
  createdAt: { type: Date, default: new Date() },
  bots: [{ type: String, ref: 'bot' }],
  owner: { type: String, ref: 'user' },
  updatedAt: { type: Date, default: new Date() },
  votes: Number
}));
