import EventHandler from './event-handler';
import { GuildMember } from 'discord.js';


export default class GuildMemberAddHandler implements EventHandler {
    on = 'guildMemberAdd';

    async invoke(member: GuildMember) {
        const inCorrectGuild = member.guild.id === process.env.GUILD_ID;
        if (member.user.bot && inCorrectGuild)
            await member.roles.add(process.env.BOT_ROLE_ID);
    }
}
