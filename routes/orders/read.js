'use strict'
const { readAll } = require('../../model')

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
            const orderData = await readAll(this.mongo, 'order');
            const restaurantData = await readAll(this.mongo, 'restaurant');

            if(orderData === []){
                reply
                .code(404)
                .header('Content-Type','application/json')
                .send("error : Not Found")
            }
            else {
                let exData = orderData[0].orderedMenu[0];
                exData.id = 1;
                console.log(exData);

                reply
                    .code(200)
                    .header('Content-Type','application/json')
                    .send()
            }
    });
}