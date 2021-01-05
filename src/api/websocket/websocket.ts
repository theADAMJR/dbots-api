import { Server } from 'http';
import { listen, Server as SocketServer } from 'socket.io';
import Log from '../../utils/log';
import WSEvent from './ws-events/ws-event';
import { resolve } from 'path';
import { readdirSync } from 'fs';

export class WebSocket {
  events: WSEvent[] = [];
  io: SocketServer;
  
  sessions = new Map<string, string>();

  get connectedUserIds() {
    return Array.from(this.sessions.values());
  }

  init(server: Server) {
    this.io = listen(server);

    const dir = resolve(`${__dirname}/ws-events`);
    const files = readdirSync(dir);

    for (const file of files) {
      const Event = require(`./ws-events/${file}`).default;
      try {
        const event = new Event();
        this.events.push(event);
      } catch {}
    }

    Log.info(`Loaded ${this.events.length} handlers`, 'ws');

    this.io.on('connection', (client) => {
      for (const event of this.events)
        client.on(event.on, (data) => event.invoke.bind(event)(this, client, data));
    });

    Log.info('Started WebSocket', 'ws');
  }
}