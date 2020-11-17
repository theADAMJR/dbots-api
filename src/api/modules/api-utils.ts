import { AuthClient } from '../server';
import { UserDocument } from '../../data/models/user';

export function sendError(res: any, code: number, error: Error) {
  return res.status(code).json({ code, message: error?.message });
}

export async function getUser(key: any) {
  return await AuthClient.getUser(key);
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

export interface BotStats {
  guildCount: number;
}