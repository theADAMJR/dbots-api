import Bots from '../data/bots';
import Users from '../data/users';
import { handleFeedback } from '../modules/reviewal';
import { getMemberFromMention } from '../utils/command-utils';
import Deps from '../utils/deps';
import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'deny';
    precondition: Permission = 'KICK_MEMBERS';

    constructor(private bots = Deps.get<Bots>(Bots)) {}
    
    execute = async (ctx: CommandContext, userMention: string, ...reason: string[]) => {
        const botMember = getMemberFromMention(userMention, ctx.guild);
        const exists = await this.bots.exists(botMember.id);
        if (!exists)
          throw new TypeError('Bot does not exist.');

        await handleFeedback(botMember.id, {
            approved: false,
            by: ctx.user.id,
            message: reason.join(' ')
        });

        return ctx.channel.send(`✔ Success`);
    }
}
