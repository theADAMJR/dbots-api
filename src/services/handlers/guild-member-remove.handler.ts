import EventHandler from './event-handler';
import { GuildMember } from 'discord.js';
import Bots from '../../data/bots';
import Deps from '../../utils/deps';
import { ChannelLog } from '../../api/modules/channel-log';

export default class GuildMemberRemoveHandler implements EventHandler {
   on = 'guildMemberRemove';

   constructor(
      private bots = Deps.get<Bots>(Bots),
      private channelLog = Deps.get<ChannelLog>(ChannelLog)) {}

   async invoke(member: GuildMember) {
      if (member.user.bot) return;

      const savedBots = await this.bots.getManageable(member);
      for (const savedBot of savedBots)
        await this.channelLog.leftServer(savedBot);
   }
}
