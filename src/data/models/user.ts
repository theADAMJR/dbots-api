import { model, Schema, Document } from 'mongoose';

export interface UserDocument extends Document {
    _id: string;
    badges: DevBadge[];
    banned: boolean;
    lastVotedAt: Date;
    premium: boolean;
    role: UserRole;
}

export type UserRole = '' | 'reviewer' | 'admin';
export enum DevBadge {
    BetaTester = 'BETA_TESTER',
    OG = 'OG',
    Viewer = 'VIEWER'
}

export const SavedUser = model<UserDocument>('user', new Schema({
    _id: String,
    badges: { type: Array, default: [] },
    banned: Boolean,
    lastVotedAt: Date,
    premium: Boolean,
    role: String
}));
