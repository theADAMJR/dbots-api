import { GuildMember } from 'discord.js';

export function getMemberFromMention(mention: string, guild: any): GuildMember {    
    const id = mention.replace(/^<@!?(\d+)>$/gm, '$1');
    const member = guild.members.cache.get(id);
    if (!member)
        throw new TypeError('Member not found.');
    
    return member;
}

export function getIDFromMention(mention?: string): string {    
    return mention?.replace(/^<@!?(\d+)>$/gm, '$1');
}

export function createUUID() {
    let time = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let random = (time + Math.random() * 16) % 16 | 0;
      time = Math.floor(time / 16);
      return ((c == 'x') ? random :(random&0x3|0x8)).toString(16);
    });
    return uuid;
}

export function getWeek(date: Date) {
    const yearStart = +new Date(date.getFullYear(), 0, 1);
    const today = +new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const dayOfYear = ((today - yearStart + 1) / 86400000);
    
    return Math.ceil(dayOfYear / 7).toString();
}