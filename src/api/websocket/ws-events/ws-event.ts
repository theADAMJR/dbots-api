import { Socket } from 'socket.io';
import { WebSocket } from '../websocket';

export default interface WSEvent {
  on: string;

  invoke: (ws: WebSocket, client: Socket, data: any) => any;
}
