/ Import main dependencies */
import { FastifyInstance } from 'fastify';

const BaseRoute = (app: FastifyInstance, opts: object, done: any): any => {

    app.route({
        method: 'GET',
        url: '/loadEmails',

        handler: async (request: object, reply: any) => {
            reply.code(200);
        },

    });

    done();
};

export default BaseRoute;