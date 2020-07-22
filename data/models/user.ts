import { model, Schema, Document } from 'mongoose';

export class XPCard {
    backgroundURL = '';
    primary = '';
    secondary = '';
    tertiary = '';
}

const userSchema = new Schema({
    _id: String,
    lastVotedAt: Date,
    premium: Boolean,
    role: String
});

export interface UserDocument extends Document {
    _id: string;
    lastVotedAt: Date;
    premium: boolean;
    role: UserRole;
}

export type UserRole = '' | 'reviewer' | 'admin';

export const SavedUser = model<UserDocument>('user', userSchema);