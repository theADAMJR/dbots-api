import Deps from '../../utils/deps';
import { bot } from '../../bot';
import config from '../../../config.json';
import Bots from '../../data/bots';

export default class SitemapGenerator {
  rootNames = [
    'search'
  ];

  docNames = [
    'api',
    'get-started',
    'badges',
    'get-featured',
    'guidelines',
    'how-it-works',
    'widget',
    'changelog',
    'post-stats'
  ];

  tagNames = [
    'anime',
    'apex-legends',
    'chat',
    'csgo',
    'customizable',
    'economy',
    'fortnite',
    'fun',
    'league-of-legends',
    'leveling',
    'logging',
    'media',
    'meme',
    'minecraft',
    'mixer',
    'moderation',
    'multipurpose',
    'music',
    'pokemon',
    'pugb',
    'reddit',
    'roblox',
    'rocket-league',
    'roleplay',
    'roles',
    'runescape',
    'soundboard',
    'twitch',
    'twitter',
    'utility',
    'valorant',
    'verification',
    'web-dashboard',
    'youtube'
  ];

  constructor(private bots = Deps.get<Bots>(Bots)) {}

  private template(data: string) {
    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${data}</urlset>`;
  }
  
  private url(url: string) {
    return `<url><loc>${url}</loc></url>`;
  }
  
  private comment(data: string) {
    return `<!-- ${data} -->`;
  }
  
  
  getRootMap() {
    const xml = (arr: string[], routes = '/') => arr
      .map(n => this.url(`${config.dashboardURL}${routes ?? '/'}${n}`))
      .join('');

    return this.template(
      this.comment('root') + xml(this.rootNames) +
      this.comment('docs') + xml(this.docNames, '/docs/') +
      this.comment('tags') + xml(this.tagNames, '/tags/'));
  }
  
  async getBotsMap() {
    const savedBots = await this.bots.getAll();
    return this.template(savedBots
      .filter(sb => bot.users.cache.has(sb._id))
      .map(sg => this
        .url(`${config.dashboardURL}/bots/${sg._id}`))
        .join(''));
  }
}