import Bots from '../data/bots';
import { handleFeedback } from '../modules/reviewal';
import { getMemberFromMention } from '../utils/command-utils';
import Deps from '../utils/deps';
import { Command, CommandContext, Permission } from './command';

export default class DenyCommand implements Command {
    aliases = ['deny', 'reject'];
    name = 'decline';
    precondition: Permission = 'KICK_MEMBERS';

    constructor(private bots = Deps.get<Bots>(Bots)) {}
    
    execute = async (ctx: CommandContext, userMention: string, ...reason: string[]) => {
        const botMember = getMemberFromMention(userMention, ctx.guild);
        const exists = await this.bots.exists(botMember.id);
        if (!exists)
          throw new TypeError('Bot does not exist.');

        const message = reason.join(' ');
        if (message.length < 50)
            throw new TypeError('Reason must be >= 50 characters long.');

        await handleFeedback(botMember.id, {
            approved: false,
            by: ctx.user.id,
            message
        });

        await botMember.kick(message);

        return ctx.channel.send(`✅ Success`);
    }
}
