'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('GET /orders', async (t) => {
  const app = await build(t)

  const response = await app.inject({
    method: 'GET',
    url: '/orders'
  })

  const responseData = [
    {
      "_id": "6237521ae5bfa293bf21836e",
      "orderedMenu": [
        {
          "_id": "62374fe0e5bfa293bf218347",
          "name": "동백커피",
          "price": 4000,
          "quantity": 1
        }
      ],
      "deliveryInfo": {
        "_id": "62375133e5bfa293bf21836b",
        "status": "PREPARING",
        "estimatedDeleveryTime": 40
      }
    }
  ]
  t.same(response.statusCode, 200)
  t.same(JSON.parse(response.payload), responseData)
})

// inject 