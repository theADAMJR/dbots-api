import DBWrapper from './db-wrapper';
import { BotAnalytics, LogDocument, SavedLog } from './models/log';

export default class BotLogs extends DBWrapper<string, LogDocument> {
  protected async getOrCreate(id: string) {
    return await SavedLog.findById(id)
      ?? await this.create(id);
  }

  async delete(id: string) {
    return await SavedLog.findByIdAndDelete(id);
  }

  protected async create(id: string) {
    return SavedLog.create({ _id: id });
  }

  async getAll() {
    return await SavedLog.find();
  }

  async logAnalytic(key: Exclude<keyof(BotAnalytics), 'lastUpdatedAt'>, id: string): Promise<LogDocument> {
    const savedLog = await this.get(id);
    const logDays = this.lastLogDays(savedLog);
    const lastIndex = logDays + savedLog.analytics[key].length - 1;
    
    savedLog.analytics[key][lastIndex] ||= 0;
    savedLog.analytics[key][lastIndex]++;
    savedLog.analytics.lastUpdatedAt = new Date();
    this.updateCTR(savedLog, lastIndex);

    for (let i = 0; i < logDays; i++) {
      savedLog.analytics[key][i] = 0;
      this.updateCTR(savedLog, i);
    }
    savedLog.analytics[key] = savedLog.analytics[key]
      .filter(x => !Number.isNaN(x));

    await savedLog.updateOne(savedLog);
    return savedLog;
  }
  private updateCTR({ analytics }: LogDocument, index: number) {
    analytics.ctr[index] = analytics.views[index] / analytics.impressions[index];
  }

  lastLogDays(savedLog: LogDocument) {
    const today = new Date().setHours(0);
    const lastUpdate = savedLog.analytics.lastUpdatedAt.setHours(0);

    return Math.round((today - lastUpdate) / (1000 * 60 * 60 * 24));
  }
}
