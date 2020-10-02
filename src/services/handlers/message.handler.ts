import EventHandler from './event-handler';
import Deps from '../../utils/deps';
import CommandService from '../command.service';
import { Message } from 'discord.js';

export default class MessageHandler implements EventHandler {
    on = 'message';

    constructor(private commands = Deps.get<CommandService>(CommandService)) {}

    async invoke(msg: Message) {
        if (msg.author.bot) return;

        const prefix = `dbots `;
        const isCommand = msg.content.startsWith(prefix);
        if (isCommand)
            return this.commands.handle(msg, prefix);
        
        if (msg.content === `<@!${msg.client.user.id}>`)       
            return msg.reply(`The prefix is \`${prefix}\`\nType \`${prefix} help\` to list commands.`);
    }
}