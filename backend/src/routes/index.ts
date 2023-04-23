import { FastifyInstance, RouteOptions } from "fastify";
import { healthCheckRoute } from "./health-check";
import { videosRoutes } from "./upload";
import { usersRoutes } from "./users";

const routes: RouteOptions[] = [
    healthCheckRoute,
    ...usersRoutes,
    ...videosRoutes
]
export const registerRoutes = (fastify: FastifyInstance) => {
    console.warn('registering routes', routes);

    routes.map((route) => {
        fastify.route(route)
    })
}