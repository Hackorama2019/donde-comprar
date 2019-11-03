const Mongoose = require('mongoose')
const { Schema } = Mongoose
const { slugify } = require('../utils')

const ShopSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true
  },
  slug: {
    type: String,
    required: false,
    default: name => slugify(name)
  },
  image: {
    type: String
  }
})

const Shop = Mongoose.model('Shop', ShopSchema)

module.exports = Shop
