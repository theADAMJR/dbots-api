import { model, Schema, Document } from 'mongoose';
import { BotDocument } from './bot';
import { UserDocument } from './user';

export interface BotPackDocument extends Document {
  _id: string;
  bots: BotDocument[];
  createdAt: Date;
  description: string;
  name: string;
  owner: UserDocument;
  updatedAt: Date;
  votes: number;
}

export const SavedBotPack = model<BotPackDocument>('botPack', new Schema({
  _id: String,
  bots: [{ type: String, ref: 'bot' }],
  createdAt: { type: Date, default: new Date() },
  description: String,
  name: String,
  owner: { type: String, ref: 'user' },
  updatedAt: { type: Date, default: new Date() },
  votes: { type: Number, default: 0 }
}));
