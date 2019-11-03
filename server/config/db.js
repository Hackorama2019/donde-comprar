const mongoose = require('mongoose')

const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME
const DB_PORT = process.env.DB_PORT || 27017
const MONGO_URI =
  process.env.MONGO_URI || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

module.exports = {
  connect: _ =>
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
}
