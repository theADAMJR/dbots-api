import { Router } from 'express';
import Deps from '../../../utils/deps';
import Bots from '../../../data/bots';
import Users from '../../../data/users';
import { sendError } from '../../modules/api-utils';
import { updateUser } from '../../modules/middleware';

export const router = Router({ mergeParams: true });

const bots = Deps.get<Bots>(Bots),
      users = Deps.get<Users>(Users);

router.get('/add-badge/:name', updateUser, async (req, res) => {
  try {
    const reviewer = res.locals.user;
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
