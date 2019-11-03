const Mongoose = require('mongoose')
const { Schema } = Mongoose
const { slugify } = require('./../utils')

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
    uppercase: true
  },
  slug: {
    type: String,
    required: false,
    default: name => slugify(name)
  }
})

const Brand = Mongoose.model('Brand', BrandSchema)

module.exports = Brand
