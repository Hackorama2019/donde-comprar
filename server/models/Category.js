const Mongoose = require('mongoose')
const { Schema } = Mongoose
const { slugify } = require('./../utils')

const CategorySchema = new Schema({
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
  refersTo: {
    type: Schema.ObjectId,
    ref: 'Category',
    required: undefined
  }
})

const Category = Mongoose.model('Category', CategorySchema)

module.exports = Category
