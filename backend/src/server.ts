import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify();

import BaseRoute from "./routes";

app.register(BaseRoute);


(async (): Promise<void> => {
    try {
        const address = '0.0.0.0';
        await app.listen({
            port: 3000,
            host: '0.0.0.0',
        });
        console.log(
            `server listening on ${address} with port ${Number(process.env.EMERGYA_SERVER_PORT)}`,
        );
    } catch (err) {
        console.error(err);
    }
})();


// const fastify = require('fastify')({
//     logger: {
//         level: "trace",
//     }
// });

// const indexRoutes = require('./routes/index')

// indexRoutes.forEach(route => fastify.route(route))

// const start = async () => {
//     try {
//         await fastify.listen({ port: 3000 })
//         fastify.log.info(`Server listening on ${fastify.server.address().port}`)
//     } catch (err) {
//         fastify.log(err)
//         process.exit(1)
//     }
// };

// start();