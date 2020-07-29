import { model, Schema, Document } from 'mongoose';

export class Change {
    public at = new Date();

    constructor(
        public by: string,
        public changes: { old: {}, new: {}}) {}
}

const LogSchema = new Schema({
    _id: String,
    changes: { type: Array, default: [] }
});

export interface LogDocument extends Document {
    _id: string;
    changes: Change[];
}

export const SavedLog = model<LogDocument>('log', LogSchema);