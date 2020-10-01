import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '[KICK_MEMBERS]  `dbots help` -> show this\n' +
            '[KICK_MEMBERS]  `dbots accept <bot_user> <reason>` -> accept bot user with reason\n' +
            '[KICK_MEMBERS]  `dbots add-badge <bot_user> <badge_name>` -> add a badge to a bot\n' +
            '[KICK_MEMBERS]  `dbots decline <bot_user> <reason>` -> decline bot user with reason\n' +
            '[ADMINISTRATOR] `dbots q` -> show approval queue');
    }
}
