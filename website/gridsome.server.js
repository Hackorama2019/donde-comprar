const products = require('./data/products.json')
const categories = require('./data/categories.json')
const brands = require('./data/brands.json')
const shops = require('./data/shops.json')

module.exports = function (api) {
  api.loadSource(({ store, addCollection }) => {
    const shopsCollection = addCollection({
      typeName: 'Shop'
    })
    shops.map(shop => shopsCollection.addNode({ ...shop, id: shop.slug }))

    const brandsCollection = addCollection({
      typeName: 'Brand'
    })
    brands.map(brand => brandsCollection.addNode({ ...brand, id: brand.slug }))

    const categoriesCollection = addCollection({
      typeName: 'Category'
    })
    categories.map(category =>
      categoriesCollection.addNode({ ...category, id: category.slug })
    )

    const productsCollection = addCollection({
      typeName: 'Product'
    })

    products.map(product =>
      productsCollection.addNode({
        ...product,
        brand: store.createReference('Brand', product.brand || 'otra'),
        category: store.createReference('Category', product.category || 'otra'),
        price: product.price.map(price => ({
          ...price,
          shop: store.createReference('Category', product.category || 'otra')
        }))
      })
    )
  })
}
