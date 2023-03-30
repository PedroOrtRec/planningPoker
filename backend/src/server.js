const fastify = require('fastify')({
    logger: {
        level: "trace",
    }
});

const indexRoutes = require('./routes/index')

indexRoutes.forEach(route => fastify.route(route))

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
        fastify.log.info(`Server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log(err)
        process.exit(1)
    }
};

start();