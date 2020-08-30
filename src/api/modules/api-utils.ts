import { AuthClient } from '../server';
import Bots from '../../data/bots';
import Deps from '../../utils/deps';
import { bot } from '../../bot';
import { UserDocument } from '../../data/models/user';

const bots = Deps.get<Bots>(Bots);

export function sendError(res: any, code: number, error: Error) {
  return res.status(code).json({ code, message: error?.message });
}

export async function getManagableBots(userId: string) {
  const savedBots = await bots.getManageable({ id: userId });  
  return bot.users.cache
    .filter(u => savedBots
      .some(sb => sb._id === u.id));
}

export async function validateBotManager(key: any, botId: string) {
  if (!key)
    throw new TypeError('Unauthorized.');

  const { id } = await AuthClient.getUser(key);
  const bots = await getManagableBots(id);
  if (!bots.some(b => b.id === botId))
    throw TypeError('Bot not manageable.');
}

export async function getUser(key: any) {
  let authUser: AuthUser = await AuthClient.getUser(key);

  authUser['displayAvatarURL'] = authUser.avatarUrl(64);
  authUser = JSON.parse(JSON
    .stringify(authUser)
    .replace(/"_(.*?)"/g, '"$1"'));

  return authUser;
}

export function validateIfCanVote(savedVoter: UserDocument) {
  const twelveHoursMs = 1000 * 60 * 60 * 12;
  const oneDayAgo = new Date(Date.now() - twelveHoursMs);
  if (savedVoter.lastVotedAt > oneDayAgo) {
    const timeLeftMs = new Date(savedVoter.lastVotedAt.getTime() + twelveHoursMs).getTime() - Date.now();
    const hoursLeft = (timeLeftMs / 1000 / 60 / 60);
    throw new TypeError(`You have already voted. You can next vote in ${hoursLeft.toFixed(2)} hours.`);
  }
}

export interface AuthUser {
  username: string;
  locale: string;
  isMFAEnabled: boolean;
  discriminator: number;
  id: string;
  avatarHash: string;
  userFlags: string[];
  premiumType: string;
  bot: boolean;
  createdTimestamp: number;
  createdAt: string;

  avatarUrl: (size: number) => string;
}

export interface BotStats {
  guildCount: number;
}