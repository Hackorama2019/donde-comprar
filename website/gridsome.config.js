// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  templates: {
    Brand: [
      {
        path: '/brand/:id',
        component: './src/templates/Brand.vue'
      }
    ],
    Category: [
      {
        path: '/category/:id',
        component: './src/templates/Category.vue'
      }
    ],
    Product: [
      {
        path: '/product/:id',
        component: './src/templates/Product.vue'
      }
    ],
    Shop: [
      {
        path: '/shop/:id',
        component: './src/templates/Shop.vue'
      }
    ]
  }
}
