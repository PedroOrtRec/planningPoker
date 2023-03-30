const routes = [
    {
        url: '/',
        method: 'GET',
        handler: (req, reply) => {
            reply.send('Hello World')
        }
    }
]

module.exports = routes;