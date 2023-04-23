import { RouteOptions } from "fastify";
import { userSignin } from "../../business-logic/users/signin";
import { RouteMethod } from "../../constant-definitions";
import { User } from "../../types/user";

export const userSigninRoute: RouteOptions = {
    method: RouteMethod.POST,
    url: '/users-signin',
    handler: async (request, reply) => {
        const {body} = request;
        const {email, phone, password} = body as User;
        const user = await userSignin(email, phone, password);
        reply.send(user); 
    },
};