import { Socket } from 'socket.io';
import BotLogs from '../../../data/bot-logs';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'BOT_PAGE_VIEW';

  constructor(private logs = Deps.get<BotLogs>(BotLogs)) {}

  async invoke(ws: WebSocket, client: Socket, { botId }) {
    let log = await this.logs.logAnalytic('impressions', botId);
    log = await this.logs.logAnalytic('views', botId);

    ws.io.sockets
      .to(botId)
      .emit('BOT_PAGE_VIEW', { log });
  }
}
