'use strict'

const { requireServerPluginFromPath } = require("fastify-cli/util")

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
   reply.code(200)
   .send ('hello world!')
  })
}
