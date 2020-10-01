import { GuildMember } from 'discord.js';
import { Command } from '../commands/command';

export default class Cooldowns {
    private cooldowns: CommandCooldown[] = [];

    get(member: GuildMember, command: Command) {
        return this.cooldowns
            .find(c => (c.userId === member.id
                    && c.commandName === command.name)
                || (c.commandName === command.name
                    && c.guildId === member.guild.id));
    }
    add(member: GuildMember, command: Command) {
        const cooldown = {
            userId: member.id,
            commandName: command.name,
            guildId: member.guild.id
        };

        if (!this.get(member, command))
            this.cooldowns.push(cooldown);

        const seconds = (command.cooldown ?? 0) * 1000;
        setTimeout(() => this.remove(member, command), seconds);
    }
    remove(member: GuildMember, command: Command) {
        const index = this.cooldowns
            .findIndex(c => (c.userId === member.id
                    && c.commandName === command.name)
                || (c.commandName === command.name
                    && c.guildId === member.guild.id));
        this.cooldowns.splice(index, 1);
    }
}

export interface CommandCooldown {
    userId: string;
    commandName: string;
    guildId: string;
}
