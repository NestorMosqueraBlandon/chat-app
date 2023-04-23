import { Socket } from "socket.io";

export const sendWelcomeMessage = (socket: Socket) => {
 socket.emit('sendMessage', {
  usuario: 'Administrator',
  mensaje: 'Welcome to this application'
});
}
   