const Mongoose = require('mongoose')
const { Schema } = Mongoose
const { slugify } = require('./../utils')

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: false,
    default () {
      return slugify(this.name)
    }
  },
  price: {
    type: [{
      price: Number,
      discountPrice: Number,
      url: String,
      site: {
        type: String,
        require: false
      }
    }],
    required: true
  },
  content: {
    type: String,
    required: false
  },
  model: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    require: false
  },
  category: {
    type: String,
    require: false
  },
  images: [{
    type: String,
    default: undefined
  }],
  updatedAt: {
    type: Date,
    default: null
  }
  // External link (redirection)
})

ProductSchema.pre('save', function (next) {
  if (!this.isModified('title')) {
    return next()
  }
  this.slug = slugify(this.title)
  return next()
})

ProductSchema.pre('update', function () {
  this.updatedAt = new Date()
})

const Product = Mongoose.model('Product', ProductSchema)

module.exports = Product
