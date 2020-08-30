import Log from '../../utils/log';
import EventHandler from './event-handler';
import { bot } from '../../bot';
import config from '../../../config.json';
import Deps from '../../utils/deps';
import { API } from '../../api/server';

export default class ReadyHandler implements EventHandler {
    on = 'ready';

    constructor(private api = Deps.get<API>(API)) {}

    async invoke() {        
        Log.info(`Bot is live!`, `events`);

        await bot.user.setPresence({
            activity: {
                name: config.bot.activity,
                type: 'WATCHING',
                url: config.dashboardURL
            }            
        });

        await this.api.initSitemaps();
    }
}
