import Bots from '../data/bots';
import { handleFeedback } from '../modules/reviewal';
import { getUserFromMention } from '../utils/command-utils';
import Deps from '../utils/deps';
import { Command, CommandContext, Permission } from './command';

export default class AcceptCommand implements Command {
  aliases = ['approve'];
  name = 'accept';
  precondition: Permission = 'KICK_MEMBERS';

  constructor(private bots = Deps.get<Bots>(Bots)) {}
  
  execute = async (ctx: CommandContext, userMention: string, ...reason: string[]) => {
    const botUser = getUserFromMention(userMention);
    const exists = await this.bots.exists(botUser.id);
    if (!exists)
      throw new TypeError('Bot does not exist.');

    const message = reason.join(' ');
    if (message.length < 50)
      throw new TypeError('Reason must be >= 50 characters long.');

    await handleFeedback(botUser.id, {
      approved: true,
      by: ctx.user.id,
      message
    });

    return ctx.channel.send(`✅ Success`);
  }
}
