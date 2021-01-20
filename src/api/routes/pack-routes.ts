import { Router } from 'express';
import { SavedBotPack } from '../../data/models/bot-pack';
import Users from '../../data/users';
import Deps from '../../utils/deps';
import { APIError, sendError, validateIfCanVote as validateCanVote } from '../modules/api-utils';
import { updateUser, validatePackExists, validateUser } from '../modules/middleware';

const users = Deps.get<Users>(Users);

export const router = Router();

router.get('/', async (req, res) => {
  try {
    const packs = await SavedBotPack.find();
    res.status(200).json(packs);
  } catch (error) { await sendError(req, res, error); }
});

router.get('/:id', validatePackExists, async (req, res) => {
  try {
    const pack = await SavedBotPack
      .findById(req.params.id)
      .populate('bots')
      .populate('owner')
      .exec();

    res.json(pack);
  } catch (error) { await sendError(req, res, error); }
});

router.post('/', updateUser, validateUser, async (req, res) => {
  try {
    let _id = req.body.name
      .toLowerCase()
      .replace(/[!@#\$%\^\&*\)\(+=._ ]/g, '-');
    const nameExists = await SavedBotPack.exists({ _id });
    if (nameExists)
      _id += '-' + Math
        .floor(Math.random() * 999999)
        .toString()
        .padStart(6, '0');

    const ownerPacksCount = await SavedBotPack
      .countDocuments({ owner: res.locals.user.id });    
    if (ownerPacksCount >= 5)
      throw new APIError(400);

    const pack = await SavedBotPack.create({
      ...req.body,
      createdAt: new Date(),
      owner: res.locals.user.id,
      _id
    });
    res.status(201).json(pack);
  } catch (error) { await sendError(req, res, error); }
});

router.patch('/:id',
  updateUser, validateUser, validatePackExists,
  async (req, res) => {
  try {
    const pack = await SavedBotPack.findById(req.params.id);
    pack.bots = (req.body.bots ?? pack.bots)
      .filter((value, index, self) => self.indexOf(value) === index);
    pack.description = req.body.description ?? pack.description;
    pack.updatedAt = new Date();
    await pack.updateOne(pack);
    
    res.json(pack);
  } catch (error) { await sendError(req, res, error); }
});

router.delete('/:id',
  updateUser, validateUser, validatePackExists,
  async (req, res) => {
  try {
    await SavedBotPack.deleteOne({ _id: req.params.id });
    res.json({ message: 'Success' });
  } catch (error) { await sendError(req, res, error); }
});

router.get('/:id/vote',
  updateUser, validateUser, validatePackExists,
  async (req, res) => {
  try {
    const savedUser = await users.get(res.locals.user);
    validateCanVote(savedUser);
    
    savedUser.lastVotedAt = new Date();
    savedUser.save();

    const pack = await SavedBotPack.findById(req.params.id);
    pack.votes++;
    await pack.save();

    res.json(pack);
  } catch (error) { await sendError(req, res, error); }
});
