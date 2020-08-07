import DBWrapper from './db-wrapper';
import { LogDocument, SavedLog } from './models/log';

export default class BotLogs extends DBWrapper<string, LogDocument> {
    protected async getOrCreate(id: string) {
        return await SavedLog.findById(id) ?? await this.create(id);
    }

    async delete(id: string) {
        return await SavedLog.findByIdAndDelete(id);
    }

    protected async create(id: string) {
        return new SavedLog({ _id: id }).save();
    }

    async getAll() {
        return await SavedLog.find();
    }
}
