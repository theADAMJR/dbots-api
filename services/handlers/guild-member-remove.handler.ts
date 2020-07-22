import EventHandler from './event-handler';
import { GuildMember } from 'discord.js';
import Bots from '../../data/bots';
import Deps from '../../utils/deps';
import { sendLog } from '../../api/routes/bots/manage-bot-routes';

export default class GuildMemberRemoveHandler implements EventHandler {
    on = 'guildMemberRemove';

    constructor(private bots = Deps.get<Bots>(Bots)) {}

    async invoke(member: GuildMember) {
        if (member.user.bot) return;

        const savedBots = await this.bots.getManageable(member);
        for (const savedBot of savedBots) {
            await sendLog('Bot Deleted', `<@!${member.id}> left the server, so <@!${savedBot.id}> was deleted.`, false);
            await savedBot.remove();
        }
    }
}
