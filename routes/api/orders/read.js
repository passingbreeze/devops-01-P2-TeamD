'use strict'
const { readAll } = require('../../../model')

module.exports = async function (fastify, opts) {
    fastify.get('/', async function (request, reply) {
      try {
        const orderHistory = await readAll(this.mongo,'order');
        const restaurantMenus = await readAll(this.mongo,'restaurants');

        if(orderHistory === []) {
          return reply
            .code(404)
            .header('Content-Type','application/json')
            .send("Error : Not Found")
        }
        else {
            const deliverStatus = result[0].deliveryInfo.status;
            const estimatedTime = result[0].deliveryInfo.estimatedDeleveryTime;
            const deliveryInfo = { deliverStatus, estimatedTime };
          reply
            .code(200)
            .header('Content-Type','application/json')
            .send({_id:result[0]._id,orderedMenu:result[0].orderedMenu,deliveryInfo:deliveryInfo})
        }
      } catch (error) {
        return reply
            .code(500)
            .header('Content-Type','application/json')
            .send({"Error":"Sibal"})
      }
       

        

    })
}