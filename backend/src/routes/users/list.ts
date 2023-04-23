import { RouteOptions } from "fastify";
import { getAllUser } from "../../business-logic/users/list";
import { RouteMethod } from "../../constant-definitions";

export const getAllUsersRoute: RouteOptions = {
    method: RouteMethod.GET,
    url: '/users',
    schema: {

    },
    handler: async (request, reply) => {
        const users = await getAllUser();
        reply.send(users); 
    },
};