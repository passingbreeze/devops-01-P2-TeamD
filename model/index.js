const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readAll: async (mongo) => {
    const collection = mongo.client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
    const result = await collection.find({}).toArray()
    return result
  },
  PatchOne: async (mongo, id, body) => {
    const collection = mongo.client.db(process.env.DB_NAME).collection(process.env.COLLECTION_NAME)
    const result = await collection.findOneAndUpdate({
      _id: ObjectId(id)
    }, {
      $set: body
    },{ 
      returnDocument : `after`
    })
    return result
  },
}