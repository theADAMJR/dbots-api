import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '`dbots help` -> show this\n' +
            '`dbots accept <bot_user> <reason>` -> accept bot user with reason\n' +
            '`dbots decline <bot_user> <reason>` -> decline bot user with reason' +
            '`dbots q` -> show approval queue');
    }
}
