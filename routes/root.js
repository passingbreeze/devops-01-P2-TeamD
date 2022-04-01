'use strict'

<<<<<<< HEAD
const { requireServerPluginFromPath } = require("fastify-cli/util")

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
   reply.code(200)
   .send ('Hello world!')

=======
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply
      .code(200)
      .send(`Hello, World!`)
>>>>>>> a08e3f41cadcb8bca2e23aefab61a84fc2a73534
  })
}
