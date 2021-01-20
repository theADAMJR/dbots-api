import { expect } from 'chai';
import { bot } from '../../src/bot';
import { SavedBot } from '../../src/data/models/bot';
import { DowntimeDetector } from '../../src/modules/downtime-detector';

describe.skip('/modules/uptime-detector', () => {
  let botUser: any;
  let detector: DowntimeDetector;

  beforeEach(() => {
    SavedBot.find = (): any => [{ id: process.env.CLIENT_ID }];

    botUser = {
      id: process.env.CLIENT_ID,
      presence: {
        status: 'online'
      } 
    };

    bot.users.cache.set(process.env.CLIENT_ID, botUser);
    bot.channels.cache.set(process.env.DOWNTIME_CHANNEL_ID, {
      id: process.env.DOWNTIME_CHANNEL_ID,
      send: () => true,
    } as any);

    detector = new DowntimeDetector();
  });

  it('one bot goes offline, logged one bot', async () => {
    botUser.presence.status = 'offline';
    await detector.checkBots();

    expect(detector.log.size).to.equal(1);
  });

  it('bot is online, ignored', async () => {
    await detector.checkBots();

    const downtime = detector.log.get(process.env.CLIENT_ID);
    expect(downtime).to.be.undefined;
  });

  it('bot is offline for 15 mins, log is sent', async () => {
    botUser.presence.status = 'offline';
    detector.log.set(process.env.CLIENT_ID, {
      logged: false,
      since: new Date(0)
    });
    await detector.checkBots();

    const log = detector.log.get(process.env.CLIENT_ID);    

    expect(log.logged).to.be.true;
  });
});
