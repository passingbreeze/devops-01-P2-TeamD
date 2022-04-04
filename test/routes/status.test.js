'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('PATCH /orders/:id/status', async (t) => {
  const app = await build(t)

  const response = await app.inject({
    method: 'PATCH',
    url: '/orders/62481c27d29976a39c5666c3/status',
    payload: { "status": "PREPARING" }
  })
  const responseData = {
    "_id": "62481c27d29976a39c5666c3",
    "deliveryInfo": {
        "status": "PREPARING",
        "assignedCourier": "박배송",
        "estimatedDeleveryTime": 40
    },
    "consumer_id": "62481c27d29976a39c5666b2",
    "restaurant": {
        "name": "동백커피",
        "address": "부산시 수영구 센텀1로 777"
    },
    "orderedMenu": [
        {
            "name": "동백커피",
            "price": 4000,
            "quantity": 3
        },
        {
            "name": "아인슈페너",
            "price": 4500,
            "quantity": 2
        }
    ]
  }
  t.same(response.statusCode, 201)
  t.same(JSON.parse(response.payload), responseData)
})

// inject 