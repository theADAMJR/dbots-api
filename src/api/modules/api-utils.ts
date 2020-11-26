import { AuthClient } from '../server';
import { UserDocument } from '../../data/models/user';
import { bot } from '../../bot';

export function sendError(res: any, { message, status }: APIError) {
  return res.status(status ?? 400).json({ code: status, message });
}

export function apiResponse(res: any, args: DefaultAPIResponse) {
  return res
    .status(args.code ?? 200)
    .json({ code: args.code ?? 200, message: args.message });
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

export async function addDevRole(userId: string) {
  try {
    await bot.guilds.cache
      ?.get(process.env.GUILD_ID)?.members.cache
      .get(userId)?.roles
      .add(process.env.DEV_ROLE_ID, 'Added bot.');
  } catch {}
}

export async function kickMember(id: string) {
  await bot.guilds.cache
    .get(process.env.GUILD_ID)?.members.cache
    .get(id)
    ?.kick();
}

export class APIError extends Error {
  constructor(
    message: string,
    public readonly status = 400) {
    super(message);
  }
}

export interface BotStats {
  guildCount: number;
}

export interface DefaultAPIResponse {
  message: string;
  code?: number;
}

export enum HexColor {
  Blue = '#4287f5',
  Green = '#42f54e',
  Red = '#f54242'
}
