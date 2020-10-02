import { bot } from '../bot';
import Log from '../utils/log';
import { promisify } from 'util';
import EventHandler from './handlers/event-handler';
import fs from 'fs';

const readdir = promisify(fs.readdir);

export default class EventsService {
    private readonly handlers: EventHandler[] = [];

    async init() {
        const handlerFiles = await readdir(`${__dirname}/handlers`);
        
        for (const file of handlerFiles) {            
            const Handler = await require(`./handlers/${file}`).default;
            const handler = Handler && new Handler();
            if (!handler?.on) continue;

            this.handlers.push(new Handler());
        }
        this.hookEvents();
    }

    private hookEvents() {
        for (const handler of this.handlers)
            bot.on(handler.on, handler.invoke.bind(handler));

        Log.info(`Loaded: ${this.handlers.length} handlers`, 'events');
    }
}