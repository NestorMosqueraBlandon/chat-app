import { RouteOptions } from "fastify";
import { getAllUser } from "../../business-logic/users/list";
import { userSignup } from "../../business-logic/users/signup";
import { RouteMethod } from "../../constant-definitions";
import { User } from "../../types/user";

export const userSignupRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/users',
    handler: async (request, reply) => {
        const {body} = request;
        const data = body as User;
        const user = await userSignup(data);
        reply.send(user); 
    },
};