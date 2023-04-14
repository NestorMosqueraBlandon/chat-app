import { RouteOptions } from 'fastify';
import { createVideoRoute } from './upload';

export const videosRoutes: RouteOptions[] = [
    createVideoRoute
]