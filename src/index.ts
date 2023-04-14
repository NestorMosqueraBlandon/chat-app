import os from 'os'
import fastify from "fastify";
import * as dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import fastifyMulter from "fastify-multer";

// TODO: Import Data Sources

// @ts-ignore
import {version, name} from '../package.json';
import { registerRoutes } from './routes';
import { initMariaDb } from './data-sources/mariadb';

const storage = fastifyMulter.memoryStorage()
const upload = fastifyMulter({ storage })

dotenv.config();
const PORT = Number(process.env.PORT);
const {HOST} = process.env;

(async () => {
    // TODO: data sources

    await initMariaDb();

    const server = fastify({
        logger: true,
    });

    server.register(fastifyCors, {
        origin: '*',
        methods: ["POST", 'GET']
    });
    server.register(require('@fastify/multipart'))


    server.register((instance, options, next) => {
        registerRoutes(instance);
        next();
    },{prefix: '/api/v1'});

    server.register(require('@fastify/swagger'), {
        swagger: {
          info: {
            title: 'Test swagger',
            description: 'Testing the Fastify swagger API',
            version: '0.1.0'
          },
          externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
          },
          host: 'localhost',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json'],
          tags: [
            { name: 'user', description: 'User related end-points' },
            { name: 'code', description: 'Code related end-points' }
          ],
          definitions: {
            User: {
              type: 'object',
              required: ['id', 'email'],
              properties: {
                id: { type: 'string', format: 'uuid' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                email: {type: 'string', format: 'email' }
              }
            }
          },
          securityDefinitions: {
            apiKey: {
              type: 'apiKey',
              name: 'apiKey',
              in: 'header'
            }
          }
        }
      })

    // server.register(upload.contentParser);


    await server.listen({port:PORT || 5000, host:HOST}, () => {
        server.log.info(`${name} App is running at http://localhost:${5000} in it's version ${version} `);
        server.log.info('Press CTRL-c to stop');
    });

})();
