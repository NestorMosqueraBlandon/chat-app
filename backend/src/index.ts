import "dotenv/config";
import fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyMulter from "fastify-multer";

// @ts-ignore
import {version, name} from '../package.json';
import { Server, Socket } from "socket.io";
import { sendWelcomeMessage } from "./business-logic/messages/welcome";

const {PORT, HOST} = process.env;

const corsOptions = {
  origin: '*'
}

const main = async() => {
  
  const app: FastifyInstance = fastify({
    logger: true
  });
  
  app.register(fastifyCors, corsOptions);
  
  const io: Server = new Server(app.server, {cors: corsOptions});

  io.on('connection', (socket: Socket) => {
    app.log.info("User connection establisehd");
    app.log.info(socket.id);
    
    socket.on('enterToChat', (user)=> {
      console.log(user)
    })
    sendWelcomeMessage(socket);
  });
  
  await app.listen({port: Number(PORT), host: HOST}, (error, address) => {
    if(error){
      app.log.error(error);
      process.exit(1);
    }
    app.log.info(`Backend App is running at http://${address}`)
    app.log.info('Press CTRL-c to stop');
  })
  
}

void main();
