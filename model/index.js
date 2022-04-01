const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readAll: async (mongo) => {
    const collection = mongo.db.collection(process.env.COLLECTION_NAME)
    const result = await collection.find({}).toArray()
    return result
  },
  PatchOne: async (mongo, id, body) => {
    const collection = mongo.db.collection(process.env.COLLECTION_NAME)
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
