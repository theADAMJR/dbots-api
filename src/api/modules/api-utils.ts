import { AuthClient } from '../server';
import { UserDocument } from '../../data/models/user';

export function sendError(res: any, { message, status }: APIError) {
  return res.status(status ?? 400).json({ code: status, message });
}

export function apiResponse(res: any, args: DefaultAPIResponse) {
  return res.status(args.code ?? 200).json(args);
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

export class APIError extends Error {
  constructor(
    message: string,
    public readonly status = 400) {
    super(message);
  }
}

export interface DefaultAPIResponse {
  message: string;
  code: number;
}
