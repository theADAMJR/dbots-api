import { Command } from '../commands/command';
import { GuildMember } from 'discord.js';

export default class Validators {
    checkPreconditions(command: Command, executor: GuildMember) {
        if (command.precondition && !executor.hasPermission(command.precondition))
            throw new TypeError(`**Required Permission**: \`${command.precondition}\``);
    }
}