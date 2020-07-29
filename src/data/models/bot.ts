import { model, Schema, Document } from 'mongoose';

export class Listing {
    body: string;
    botId: string;
    invite: string;
    githubURL: string;
    overview: string;
    ownerIds: string[];
    prefix: string;
    supportInvite: string; 
    tags: string[];
    websiteURL: string;
}

export interface Feedback {
    approved: boolean;
    message: string;
    by: string;
}

const botSchema = new Schema({
    _id: String,
    approvedAt: Date,
    badges: { type: Array, default: [] },
    createdAt: Date,
    feedback: { type: Array, default: [] },
    listing: Object,
    ownerId: String,
    stats: { guildCount: Number },
    totalVotes: Number,
    lastVoteAt: Date,
    votes: { type: Array, default: [] }
});

export interface BotDocument extends Document {
    _id: string;
    approvedAt: Date;
    badges: string[];
    createdAt: Date;
    feedback: Feedback[];
    listing: Listing;
    ownerId: string;
    stats: { guildCount: number },
    totalVotes: number;
    lastVoteAt: Date;
    votes: string[];
}

export const SavedBot = model<BotDocument>('bot', botSchema);