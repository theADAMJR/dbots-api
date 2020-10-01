import Bots from '../data/bots';
import Users from '../data/users';
import { handleFeedback } from '../modules/reviewal';
import { getIDFromMention, getMemberFromMention } from '../utils/command-utils';
import Deps from '../utils/deps';
import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'add-badge';
    precondition: Permission = 'KICK_MEMBERS';

    constructor(
        private bots = Deps.get<Bots>(Bots),
        private users = Deps.get<Users>(Users)) {}
    
    execute = async (ctx: CommandContext, userMention: string, badgeName: string) => {
        const botId = getIDFromMention(userMention);
        const exists = await this.bots.exists(botId);
        if (!exists)
          throw new TypeError('Bot does not exist.');

        const savedBot = await this.bots.get(botId);
        savedBot.badges.push(badgeName);
        savedBot.save();

        return ctx.channel.send(`✔ Bot now has \`${savedBot.badges.length}\` badges`);
    }
}
