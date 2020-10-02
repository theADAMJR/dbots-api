import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '🔨 `dbots accept <bot> <reason>` -> accept bot user with reason\n' +
            '🅰 `dbots add-badge <bot> <badge_name>` -> add a badge to a bot\n' +
            '🅰 `dbots clear-badges <bot>` -> clear badges from a bot\n' +
            '🅰 `dbots delete <bot> <reason>` -> delete a bot from the list\n' +
            '🔨 `dbots decline <bot> <reason>` -> decline bot user with reason\n' +
            '🔨 `dbots help` -> show this\n' +
            '✅ `dbots ping` -> `dbots ping` -> pong!\n' +
            '🔨 `dbots q` -> show approval queue');
    }
}
