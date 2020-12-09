import fetch from 'node-fetch';
import { bot } from '../../bot';
import { APIError } from './api-utils';

export class PartialUsers {
  readonly cache = new Map<string, PartialUser>();

  async get(id: string): Promise<PartialUser> {
    const user = this.cache.get(id) ?? await this.fetchUser(id);

    this.cache.set(id, user);
    setTimeout(() => this.cache.delete(id), 60 * 60 * 1000);
    
    return {
      ...user,
      displayAvatarURL: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`,
      tag: `${user.username}#${user.discriminator}`
    };
  }

  private async fetchUser(id: string) {
    const discordRes = await fetch(`https://discord.com/api/v6/users/${id}`, {
      headers: { Authorization: `Bot ${bot.token}` }
    });

    if (discordRes.status === 429)
      throw new APIError('You are being rate limited by Discord.', 429);
    else if (discordRes.status === 404)
      throw new APIError('User does not exist.', 404);

    return await discordRes.json();
  }
}

export interface PartialUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  displayAvatarURL: string;
  tag: string;
}