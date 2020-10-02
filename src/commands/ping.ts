import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'ping';
    
    execute = async (ctx: CommandContext) => ctx.channel.send(`🏓 Pong`);
}
