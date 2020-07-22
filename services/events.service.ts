import { bot } from '../bot';
import Log from '../utils/log';

import EventHandler from './handlers/event-handler';
import ReadyHandler from './handlers/ready.handler';
import GuildMemberAddHandler from './handlers/guild-member-add.handler';
import GuildMemberRemoveHandler from './handlers/guild-member-remove.handler';

export default class EventsService {
    private readonly handlers: EventHandler[] = [
        new ReadyHandler(),
        new GuildMemberAddHandler(),
        new GuildMemberRemoveHandler()
    ];

    constructor() {
        for (const handler of this.handlers)
            bot.on(handler.on, handler.invoke.bind(handler));
        
        Log.info(`Loaded: ${this.handlers.length} handlers`, 'events');
    }
}