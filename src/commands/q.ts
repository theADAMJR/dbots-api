import { bot } from '../bot';
import { BotDocument, SavedBot } from '../data/models/bot';
import { Command, CommandContext, Permission } from './command';
import config from '../../config.json';

export default class QCommand implements Command {
    name = 'q';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        const unapprovedBots = await SavedBot.find({ approvedAt: undefined });
        
        const action = (b: BotDocument) => !bot.users.cache.has(b.id)
            ? `\`https://discord.com/oauth2/authorize?client_id=${b.id}&guild_id=${config.guild.id}&scope=bot\``
            : `\`${config.dashboardURL}/bots/${b.id}\``;
        
        const details = unapprovedBots
            .slice(0, 10)
            .map((b, i) => `[${i + 1}] ${action(b)}`)
            .join('\n');

        return ctx.channel.send(details || '👀 Queue is currently empty...');
    }
}
