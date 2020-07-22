import DBWrapper from './db-wrapper';
import { BotTokenDocument, SavedBotToken } from './models/bot-token';
import { createUUID } from '../utils/command-utils';

export default class BotTokens extends DBWrapper<string, BotTokenDocument> {
    protected async getOrCreate(id: string) {
        return await SavedBotToken.findById(id) ?? await this.create(id);
    }   

    protected create(id: string) {
        return new SavedBotToken({ _id: id, token: createUUID() }).save();
    }

    async delete(id: string) {
        return await SavedBotToken.findByIdAndDelete(id);
    }

    async validate(botId: string, value: string) {
        const savedToken = await SavedBotToken.findById(botId);
        if (savedToken.token !== value)
            throw new TypeError('Invalid token.');
    }
}