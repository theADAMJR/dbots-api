import Log from '../../utils/log';
import EventHandler from './event-handler';
import { bot } from '../../bot';
import config from '../../../config.json';
export default class ReadyHandler implements EventHandler {
    on = 'ready';

    async invoke() {        
        Log.info(`Bot is live!`, `events`);

        await bot.user.setPresence({
            activity: {
                name: config.bot.activity,
                type: 'WATCHING',
                url: 'https://dbots.co'
            }            
        });
    }
}
