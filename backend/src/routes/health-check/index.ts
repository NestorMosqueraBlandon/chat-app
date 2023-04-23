import { RouteOptions } from "fastify";

// @ts-ignore
import {version, name} from '../../../package.json';

export const healthCheckRoute: RouteOptions = {
    method: 'GET',
    url: '/health-check',
    handler: async () => {
        
        console.log(JSON.stringify({
            appName: name,
            appVersion: version,
            status: 'ok',
            uptime: process.uptime(),
          }, null, 2));

          return {
            appName: name,
            appVersion: version,
            status: 'ok',
            uptime: process.uptime(),
          };
    },
};