import { FastifyReply, FastifyRequest, RouteOptions } from "fastify";
import { NormalizedRequest } from "../../types/normalized-request";
import { normalizeFastifyRequest } from '../normalize-fastify-request/index';

export enum RouteMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
}

export const makeFastifyRoute = (
    method: RouteMethod,
    url: string,
    handler: (
        req: FastifyRequest,
        reply: FastifyReply
    ) => Promise<void>,
    authFunction?: (req: NormalizedRequest) => Promise<unknown>,
    extraOptions?: Partial<Omit<RouteOptions, 'handler'>>,
) : RouteOptions => {
    const enhanceHandler: RouteOptions['handler'] = 
        async (request: FastifyRequest,
               reply: FastifyReply) => {
                const normalizedReq = normalizeFastifyRequest(request);
                // await authFunction(normalizedReq);
                return handler(request, reply);
            };
    return {
        ...extraOptions,
        method,
        url,
        handler: enhanceHandler,
    };
};