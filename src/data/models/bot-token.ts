import { model, Schema, Document } from 'mongoose';

const botSchema = new Schema({
    _id: String,
    token: String,
    voteWebhookURL: String
});

export interface BotTokenDocument extends Document {
    _id: string;
    token: string;
    voteWebhookURL: string;
}

export const SavedBotToken = model<BotTokenDocument>('botToken', botSchema);