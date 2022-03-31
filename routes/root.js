'use strict'

const { requireServerPluginFromPath } = require("fastify-cli/util")

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
<<<<<<< HEAD
   reply.code(200)
   .send ('hello world!')
=======
    return reply
      .code(200)
      .send(`Hello, World`)
>>>>>>> a6caca5f507b38988a1851654a465bfbbb03d270
  })
}
