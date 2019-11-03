const { getQueryOptions } = require('../../utils')

const errorHandle = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => {
    return res
      .status(err.errorCode || 500)
      .json({
        message: err.message // Custom message
      })
      .end()
  })
}

const queryOptions = defaultOptions => (req, res, next) => {
  req.queryOptions = getQueryOptions(req.query, defaultOptions)
  return next()
}

module.exports = {
  errorHandle,
  queryOptions
}
