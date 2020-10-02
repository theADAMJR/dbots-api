import EventHandler from './event-handler';
import { GuildMember } from 'discord.js';
import config from '../../../config.json';

export default class GuildMemberAddHandler implements EventHandler {
    on = 'guildMemberAdd';

    async invoke(member: GuildMember) {
        const inCorrectGuild = member.guild.id === config.guild.id;
        if (member.user.bot && inCorrectGuild)
            await member.roles.add(config.guild.botRoleId);
    }
}
