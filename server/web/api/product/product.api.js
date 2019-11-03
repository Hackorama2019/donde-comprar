const { Router } = require('express')
const Controller = require('./product.controller')
const { errorHandle, queryOptions } = require('../../middlware')

const router = Router()

const defaultPagination = {
  allowPagination: true,
  defaultPagination: [1, 50],
  allowOrder: true,
  orderPropsAllowed: ['id', 'slug', 'name', 'category', 'shop', 'brand'],
  allowFilter: true,
  filterPropsAllowed: ['id', 'slug', 'name', 'category', 'shop', 'brand'],
  strictFilter: true
}

module.exports = router
  .get('/', queryOptions(defaultPagination), errorHandle(Controller.getProducts))
