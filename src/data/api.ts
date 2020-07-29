import { BotDocument, SavedBot } from './models/bot';
import DBWrapper from './db-wrapper';

export default class Bots extends DBWrapper<string, BotDocument> {
    protected async getOrCreate(id: string) {
        if (id === 'user') return null;

        return await SavedBot.findById(id) ?? await this.create(id);
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
}