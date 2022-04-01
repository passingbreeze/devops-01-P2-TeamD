'use strict'
const { readOne } = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.patch('/orders/:id/status', async function (request, reply) {
        const result = await order.readOne(this.mongo, request.params.id)
        console.log({_id: ObjectId(request.params.id)})
        reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(result)
    })    
}