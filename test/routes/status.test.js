'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('PATCH /orders/:id/status', async (t) => {
  const app = await build(t)

  const response = await app.inject({
    method: 'PATCH',
    url: '/api/orders/62481c27d29976a39c5666c3/status',
    payload: { "status": "PREPARING" }
  })
  const responseData = {
    "_id": "62481c27d29976a39c5666c3",
    "orderedMenu": [
        {
            "name": "동백커피",
            "price": 4000,
            "quantity": 3,
            "_id": "62481c27d29976a39c5666b4"
        },
        {
            "name": "아인슈페너",
            "price": 4500,
            "quantity": 2,
            "_id": "62481c27d29976a39c5666b5"
        }
    ],
    "deliveryInfo": {
        "status": "PREPARING",
        "estimatedDeleveryTime": 40
    }
}
  // PREPARING (조리 중), READY_TO_PICK_UP (픽업 대기 중), REJECTED (주문 반려)
  t.same(response.statusCode, 201)
  t.same(JSON.parse(response.payload), responseData)
})

// inject 