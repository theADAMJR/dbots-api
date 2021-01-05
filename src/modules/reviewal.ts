import { ChannelLog } from '../api/modules/channel-log';
import { bot } from '../bot';
import Bots from '../data/bots';
import { Feedback } from '../data/models/bot';
import Deps from '../utils/deps';

const bots = Deps.get<Bots>(Bots);
const channelLog = Deps.get<ChannelLog>(ChannelLog);

export async function handleFeedback(botId: string, feedback: Feedback) {
  const savedBot = await bots.get(botId);

  try {
    await bot.users.cache
      .get(savedBot.ownerId)
      ?.send(`Your bot, <@!${savedBot.id}>, was ${feedback.approved ? 'approved' : 'not approved'} by <@!${feedback.by}> - \`${feedback.message}\``);
  } catch {}

  (feedback.approved)
    ? await channelLog.approved(savedBot, feedback)
    : await channelLog.declined(savedBot, feedback);

  if (!feedback.approved)
    return savedBot.remove();

  savedBot.approvedAt = new Date();
  savedBot.feedback.push(feedback);
  await savedBot.save();
}
