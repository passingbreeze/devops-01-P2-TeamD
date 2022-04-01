'use strict'
const { ObjectId } = require('fastify-mongodb')


module.exports = async function (fastify, opts) {

    fastify.get('/', async function (request, reply) {
        const order = this.mongo.db.collection('order')
        const result = await order.find({}).toArray()
        reply
        .code(201)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(result)
        }
    )

  fastify.get('/:id', async function (request, reply) {
    const order = this.mongo.db.collection('order')
    const result = await order.findOne({_id: ObjectId(request.params.id)})
    console.log({_id: ObjectId(request.params.id)})
    reply
    .code(201)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(result)
  })

}
