import { TextChannel, MessageEmbed } from 'discord.js';
import { bot } from '../../bot';
import { BotDocument, Feedback } from '../../data/models/bot';
import { HexColor } from './api-utils';

export class ChannelLog {
  async added(savedBot: BotDocument) {
    await this.sendLog('Bot Added', `<@!${savedBot.ownerId}> added <@!${savedBot.id}>.`);
  }
  async edited(savedBot: BotDocument) {
    await this.sendLog('Bot Edited', `<@!${savedBot.ownerId}> edited <@!${savedBot.id}>.`);
  }
  async deleted(botId: string, instigatorId: string, reason?: string) {
    await this.sendLog(
      `Bot Deleted`,
      `<@!${instigatorId}> deleted <@!${botId}> - \`${reason}\``,
      HexColor.Red
    );
  }
  async leftServer(savedBot: BotDocument) {
    await this.sendLog(
      'Bot Hidden',
      `<@!${savedBot.ownerId}> left the server, so <@!${savedBot.id}> was hidden from the list.`,
      HexColor.Red
    );
  }

  async approved(savedBot: BotDocument, feedback: Feedback) {
    await this.sendLog(
      `Bot Approved`,
      `<@!${savedBot.ownerId}>'s bot, <@!${savedBot.id}>, was approved by <@!${feedback.by}> - \`${feedback.message}\``,
      HexColor.Green
    );
  }
  async declined(savedBot: BotDocument, feedback: Feedback) {
    await this.sendLog(
      `Bot Declined`,
      `<@!${savedBot.ownerId}>'s bot, <@!${savedBot.id}>, was declined by <@!${feedback.by}> - \`${feedback.message}\``,
      HexColor.Red
    );
  }

  private async sendLog(title: string, description: string, hexColor = HexColor.Blue) {
    try {
      await (bot.guilds.cache
        .get(process.env.GUILD_ID)?.channels.cache
        .get(process.env.LOG_CHANNEL_ID) as TextChannel)
        ?.send(`>>> **${title}**\n${description} `);
    } catch {}
  }
}
