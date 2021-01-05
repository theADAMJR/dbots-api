import Log from '../../utils/log';
import EventHandler from './event-handler';
import { bot } from '../../bot';

import Deps from '../../utils/deps';
import { API } from '../../api/server';
import CommandService from '../command.service';
import { DowntimeDetector } from '../../modules/downtime-detector';

export default class ReadyHandler implements EventHandler {
    on = 'ready';
    initialized = false;

    constructor(
        private api = Deps.get<API>(API),
        private commands = Deps.get<CommandService>(CommandService),
        private downtime = Deps.get<DowntimeDetector>(DowntimeDetector)) {}

    async invoke() {
        if (this.initialized) return;
        this.initialized = true;        

        await bot.user.setPresence({
            activity: {
                name: 'dbots.co',
                type: 'WATCHING',
                url: process.env.DASHBOARD_URL
            }            
        });

        await this.commands.init();
        await this.api.initSitemaps();

        Log.info(`Bot is live!`, `events`);
    }
}
