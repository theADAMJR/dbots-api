import { Router } from 'express';
import { SavedBotPack } from '../../data/models/bot-pack';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { sendError, validateIfCanVote as validateCanVote } from '../modules/api-utils';
import { updateUser, validateUser } from '../modules/middleware';

const users = Deps.get<Users>(Users);

export const router = Router();

router.get('/', async (req, res) => {
  try {
    const packs = await SavedBotPack.find();
    res.status(200).json(packs);
  } catch (error) { sendError(res, error); }
});

router.get('/:id', async (req, res) => {
  try {
    const pack = await SavedBotPack
      .findById(req.params.id)
      .populate('bots')
      .populate('owner')
      .exec();

    res.json(pack);
  } catch (error) { sendError(res, error); }
});

router.post('/', updateUser, validateUser, async (req, res) => {
  try {
    let name = req.body.name?.replace(/ /g, '-');
    const nameExists = await SavedBotPack.exists({ _id: name });
    if (nameExists) {
      name += Math
        .floor(Math.random() * 999999)
        .toString()
        .padStart(6, '0')
    }

    const pack = await SavedBotPack.create({ ...req.body, _id: name });
    res.status(201).json(pack);
  } catch (error) { sendError(res, error); }
});

router.patch('/:id', updateUser, validateUser, async (req, res) => {
  try {
    const pack = await SavedBotPack.findById(req.params.id);
    pack.bots = req.body.bots;
    pack.description = req.body.description;
    pack.updatedAt = new Date();
    await pack.updateOne(pack); 
    
    res.status(200).json(pack);
  } catch (error) { sendError(res, error); }
});

router.delete('/:id', updateUser, validateUser, async (req, res) => {
  try {
    await SavedBotPack.deleteOne({ _id: req.params.id });
    res.status(200);
  } catch (error) { sendError(res, error); }
});

router.get('/:id/vote', updateUser, validateUser, async (req, res) => {
  try {
    const savedUser = await users.get(res.locals.user);
    validateCanVote(savedUser);

    const pack = await SavedBotPack.findById(req.params.id);
    pack.votes++;
    await pack.save();

    res.status(200).json(pack);
  } catch (error) { sendError(res, error); }
});
