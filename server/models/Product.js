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
  price: [{
    original: Number,
    discount: Number,
    url: String,
    origin: String
  }],
  shops: {
    type: [String]
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
    require: false,
    uppercase: true
  },
  category: {
    type: String,
    require: false,
    uppercase: true
  },
  images: [{
    type: String,
    default: []
  }],
  updatedAt: {
    type: Date,
    default: null
  }
})

ProductSchema.pre('save', function (next) {
  if (!this.isModified('title')) {
    return next()
  } 
  this.shops = this.price.map(({ origin }) => origin)

  this.slug = slugify(this.title)
  return next()
})

ProductSchema.pre('update', function () {
  this.updatedAt = new Date()
})

const Product = Mongoose.model('Product', ProductSchema)

module.exports = Product
