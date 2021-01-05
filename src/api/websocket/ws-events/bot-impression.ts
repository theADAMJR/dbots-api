import { Socket } from 'socket.io';
import BotLogs from '../../../data/bot-logs';
import Deps from '../../../utils/deps';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'BOT_IMPRESSION';

  constructor(private logs = Deps.get<BotLogs>(BotLogs)) {}

  async invoke(ws: WebSocket, client: Socket, { botId }) {
    ws.io.sockets
      .to(botId)
      .emit('BOT_IMPRESSION', {
        log: await this.logs.logAnalytic('impressions', botId)
      });
  }
}
