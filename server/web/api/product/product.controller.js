const { Product } = require('../../../models')

module.exports = {
  async getProducts (req, res, next) {
    const {
      pagination,
      options: { filter, ...options }
    } = req.queryOptions

    if (!options.sort) {
      options.sort = { updatedAt: -1, createdAt: -1 }
    }

    const nodes = await Product.find(filter, null, options)
    pagination.total = await Product.countDocuments(filter)

    return res.json({ ...pagination, data: nodes })
  }
}
