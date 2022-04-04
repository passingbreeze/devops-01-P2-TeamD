'use strict'
const { PatchOne, readOne } = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.patch('/:id/status', async function (request, reply) {
        const updateValue = request.body.status;
        let goingPatch = await readOne(this.mongo, 'order', request.params.id);
        goingPatch.deliveryInfo.status = updateValue;
        const result = await PatchOne(this.mongo, 'order', request.params.id, goingPatch);
        if(result) {
            reply
            .code(201)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(result);
        }
        else {
            reply
            .code(404)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ "Error" : "Not Found" });
        }
        
    })    
}