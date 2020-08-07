import EventHandler from './event-handler';
import { GuildMember } from 'discord.js';
import config from '../../../config.json';

export default class GuildMemberAddHandler implements EventHandler {
    on = 'guildMemberAdd';

    async invoke(member: GuildMember) {
        if (member.user.bot)
            member.roles.add(config.guild.botRoleId);
    }
}
