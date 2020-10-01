import { sendLog } from '../api/routes/bots/manage-bot-routes';
import { bot } from '../bot';
import Bots from '../data/bots';
import { Feedback } from '../data/models/bot';
import Deps from '../utils/deps';

const bots = Deps.get<Bots>(Bots);

export async function handleFeedback(botId: string, feedback: Feedback) {
  const savedBot = await bots.get(botId);

  try {
    await bot.users.cache.get(savedBot.ownerId)
      ?.send(`Your bot, <@!${savedBot.id}>, was ${feedback.approved ? 'approved' : 'not approved'} by <@!${feedback.by}> - \`${feedback.message}\``);
  } catch {}

  await sendLog(`Bot ${feedback.approved ? 'Approved' : 'Not Approved'}`,
    `<@!${savedBot.ownerId}>'s bot, <@!${botId}>, was ${feedback.approved ? 'approved' : 'not approved'} by <@!${feedback.by}> - \`${feedback.message}\``, feedback.approved);

  if (!feedback.approved)
    return savedBot.remove();

  savedBot.approvedAt = new Date();
  savedBot.feedback.push(feedback);
  await savedBot.save();
}