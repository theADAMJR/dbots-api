import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';
import WSEvent from './ws-event';

export default class implements WSEvent {
  on = 'READY';

  async invoke(ws: WebSocket, client: Socket, { botIds }) {    
    client.join(botIds);
  }
}
