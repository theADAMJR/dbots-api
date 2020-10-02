import { BotDocument, SavedBot } from './models/bot';
import DBWrapper from './db-wrapper';
import { getWeek } from '../utils/command-utils';

export default class Bots extends DBWrapper<string, BotDocument> {
    protected async getOrCreate(id: string) {
        if (!id || id === 'user')
            return null;

        const savedBot = await SavedBot.findById(id)
            ?? await this.create(id);

        const votedForThisWeek = savedBot.lastVoteAt
            && getWeek(savedBot.lastVoteAt) === getWeek(new Date());
        if (!votedForThisWeek)
            savedBot.votes = [];
            
        return savedBot;
    }

    protected create(id: string) {        
        return new SavedBot({ _id: id }).save();
    }

    async delete(id: string) {
        return await SavedBot.findByIdAndDelete(id);
    }

    exists(id: string) {
        return SavedBot.exists({ _id: id });
    }

    async getManageable({ id }: { id: string }) {
        return await SavedBot.find({ ownerId: id });
    }

    async getAll() {
        return await SavedBot.find();
    }
}