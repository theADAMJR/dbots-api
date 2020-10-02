import { Command, CommandContext, Permission } from './command';
import { getIDFromMention } from '../utils/command-utils';
import { sendLog } from '../api/routes/bots/manage-bot-routes';
import Deps from '../utils/deps';
import Bots from '../data/bots';

export default class DeleteCommand implements Command {
    name = 'delete';
    aliases = ['remove'];
    precondition: Permission = 'ADMINISTRATOR';

    constructor(private bots = Deps.get<Bots>(Bots)) {}
    
    execute = async (ctx: CommandContext, botUserMention: string, ...reason: string[]) => {
        const botId = getIDFromMention(botUserMention);
        const savedBot = await this.bots.get(botId);
        await this.bots.delete(botId);
        
        const message = reason?.join(' ')
            || 'No reason specified.';
        await sendLog('Bot Deleted',
            `<@!${savedBot.ownerId}>'s bot, <@!${botId}> was deleted by <@!${ctx.user.id}> - \`${message}\``, false);

        return ctx.channel.send(`✅ Success`);
    }
}
