const isNullOrUndefined = _ => _ === undefined || _ === null

const slugify = originalText => {
  if (!originalText) {
    return ''
  }

  const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeeiiiiooooouuuunc------'

  let text = originalText
    .toString()
    .toLowerCase()
    .trim()

  for (let i = 0; i <= from.length; i++) {
    text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  /* eslint-disabled escape-character */
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

const getPage = (page, defaultPage) => {
  if (isNullOrUndefined(page)) {
    return defaultPage
  }
  return Math.max(defaultPage, !isNaN(page) ? page : defaultPage)
}

const getPerPage = (perPage, defaultPerPage) => {
  if (isNullOrUndefined(perPage)) {
    return defaultPerPage
  }
  return Math.max(defaultPerPage, !isNaN(perPage) ? perPage : defaultPerPage)
}

const getPagination = (
  { all, perPage, page },
  { allowPagination = true, defaultPagination = [1, 50] } = {},
  options
) => {
  const pagination = {}

  if (allowPagination && !all) {
    const currentPage = getPage(page, defaultPagination[0])

    // Pagination
    options.limit = getPerPage(perPage, defaultPagination[1])
    options.skip = (currentPage - 1) * options.limit

    // Client
    pagination.page = currentPage
    pagination.perPage = options.limit
  }

  return pagination
}

const getFilters = (
  filters = {},
  {
    allowFilter = true,
    filterPropsAllowed = [],
    strictFilter = true
  } = {},
  options
) => {
  const conditions = {}

  if (allowFilter && Object.keys(filters).length > 0) {
    options.filter = {}

    for (const [key, value] of Object.entries(filters)) {
      if (filterPropsAllowed.includes(key)) {
        conditions[key] = value
        options.filter[key] = strictFilter ? value : new RegExp(value)
      }
    }
  }

  return conditions
}

const getSortOrder = (
  { sort, order },
  { allowSort = true, orderPropsAllowed = [] } = {},
  options
) => {
  let sortOption = ''

  if (allowSort & (orderPropsAllowed.length > 0) & !isNullOrUndefined(sort)) {
    const sortParam = (sort || '').split(':')
    const sortField = sortParam[0]
    const sortOrder = sortParam[1] === 'asc' ? 'asc' : 'desc'

    options.sort = {}

    if (!isNullOrUndefined(sortField) & orderPropsAllowed.includes(sortField)) {
      const sortValue = sortParam[1] === 'asc' ? 1 : -1
      options.sort = { [sortField]: sortValue }
      sortOption = `${sortField}:${sortOrder}`
    }
  }

  return sortOption
}

const getQueryOptions = (query, defaultOptions) => {
  const options = {}

  return {
    options,
    pagination: {
      filter: getFilters(query, defaultOptions, options),
      ...getPagination(query, defaultOptions, options),
      ...getSortOrder(query, defaultOptions, options)
    }
  }
}

module.exports = {
  slugify,
  isNullOrUndefined,
  getQueryOptions
}
