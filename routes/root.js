'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return reply
      .code(200)
      .send(`<div class="mt-4 p-5 bg-primary text-white rounded">
      <h1>현재 서버가 정상 작동중입니다.</h1>
      <p>데이터베이스도 연결되었습니다...</p>
    </div>`)
  })
}