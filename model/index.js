const { ObjectId } = require('fastify-mongodb')

module.exports = {
  readAll: async (mongo,collectionName) => {
    const collection = mongo.db.collection(collectionName)
    const result = await collection.find({}).toArray()
    return result
  },
  PatchOne: async (mongo, id, body,collectionName) => {
    const collection = mongo.db.collection(collectionName)
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
