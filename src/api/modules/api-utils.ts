import { UserDocument } from '../../data/models/user';
import { bot } from '../../bot';
import { ErrorLogger } from './error-logger';
import Deps from '../../utils/deps';

const errorLogger = Deps.get<ErrorLogger>(ErrorLogger);

export async function sendError(req: any, res: any, { message, status }: APIError) {
  status ??= 500;
  await errorLogger.api(status, message, req.originalUrl);
  return res.status(status).json({ message });
}

export function apiResponse(res: any, args: DefaultAPIResponse) {
  return res
    .status(args.code ?? 200)
    .json({ code: args.code ?? 200, message: args.message });
}

export function validateIfCanVote(savedVoter: UserDocument) {
  const twelveHoursMs = 1000 * 60 * 60 * 12;
  const oneDayAgo = new Date(Date.now() - twelveHoursMs);

  if (savedVoter.lastVotedAt > oneDayAgo) {
    const timeLeftMs = new Date(savedVoter.lastVotedAt.getTime() + twelveHoursMs).getTime() - Date.now();
    const hoursLeft = (timeLeftMs / 1000 / 60 / 60);
    throw new APIError(429);
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
  private static readonly messages = new Map<number, string>([
    [400, 'Bad request'],
    [401, 'Unauthorized'],
    [403, 'Forbidden'],
    [404, 'Not found'],
    [429, 'You are being rate limited'],
    [500, 'Internal server error'],
  ])

  constructor(public readonly status = 400) {
    super(APIError.messages.get(status));
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
