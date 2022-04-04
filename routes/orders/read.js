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
                console.log(orderData);
                const csm_id = orderData.consumer_id;
                const orderedMenu = orderData.orderedMenu;
                const deliInfo = orderData.deliveryInfo;
                reply
                    .code(200)
                    .header('Content-Type','application/json')
                    .send()
            }
    });
}