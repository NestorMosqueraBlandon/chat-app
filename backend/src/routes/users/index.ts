import { RouteOptions } from 'fastify';
import { getAllUsersRoute } from './list';
import { userSigninRoute } from './signin';
import { userSignupRoute } from './signup';

export const usersRoutes: RouteOptions[] = [
    getAllUsersRoute,
    userSignupRoute,
    userSigninRoute
]