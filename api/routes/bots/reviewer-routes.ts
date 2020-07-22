import { Router } from 'express';
import { bot } from '../../../bot';
import { getUser } from '../user-routes';
import { Feedback } from '../../../data/models/bot';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import Users from '../../../data/users';
import { sendLog } from './manage-bot-routes';
import { sendError } from '../../modules/api-utils';

export const router = Router({ mergeParams: true });

const bots = Deps.get<Bots>(Bots),
      users = Deps.get<Users>(Users);

router.post('/review', async (req, res) => {
  try {
    const reviewer = await getUser(req.query.key);
    const savedReviewer = await users.get(reviewer);
    if (savedReviewer.role !== 'admin' &&
      savedReviewer.role !== 'reviewer')
      throw new TypeError('Insufficient permissions.');
    
    const exists = await bots.exists(req.params.id);
    if (!exists)
      throw new TypeError('Bot does not exist.');

    await handleFeedback(req.params.id, {
      approved: req.body.approved,
      by: reviewer.id,
      message: req.body.reason
    });

    res.json({ success: true });
  } catch (error) { sendError(res, 400, error); }
});

router.get('/add-badge/:name', async (req, res) => {
  try {
    const reviewer = await getUser(req.query.key);
    const savedReviewer = await users.get(reviewer);
    if (savedReviewer.role !== 'admin')
      throw new TypeError('Insufficient permissions.');
    
    const exists = await bots.exists(req.params.id);
    if (!exists)
      throw new TypeError('Bot does not exist.');
    
    const savedBot = await bots.get(req.params.id);
    savedBot.badges.push(req.params.name);
    await savedBot.save();
    
    res.json({ success: true });
  } catch (error) { sendError(res, 400, error); }
});

async function handleFeedback(id: string, feedback: Feedback) {
  const savedBot = await bots.get(id);

  try {
    await bot.users.cache.get(savedBot.ownerId)
      ?.send(`Your bot, <@!${savedBot.id}>, was ${feedback.approved ? 'approved' : 'not approved'} by <@!${feedback.by}> - \`${feedback.message}\``);
  } catch {}

  await sendLog(`Bot ${feedback.approved ? 'Approved' : 'Not Approved'}`,
    `<@!${savedBot.ownerId}>'s bot, <@!${id}>, was ${feedback.approved ? 'approved' : 'not approved'} by <@!${feedback.by}> - \`${feedback.message}\``, feedback.approved);

  if (!feedback.approved)
    return savedBot.remove();

  savedBot.approvedAt = new Date();
  savedBot.feedback.push(feedback);
  await savedBot.save();
}