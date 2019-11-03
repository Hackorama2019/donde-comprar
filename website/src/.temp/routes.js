export default [
  {
    path: "/shops/",
    component: () => import(/* webpackChunkName: "page--src-pages-shops-vue" */ "C:\\Users\\guest\\Desktop\\donde-comprar\\website\\src\\pages\\Shops.vue")
  },
  {
    path: "/product/",
    component: () => import(/* webpackChunkName: "page--src-pages-product-vue" */ "C:\\Users\\guest\\Desktop\\donde-comprar\\website\\src\\pages\\Product.vue")
  },
  {
    path: "/category/",
    component: () => import(/* webpackChunkName: "page--src-pages-category-vue" */ "C:\\Users\\guest\\Desktop\\donde-comprar\\website\\src\\pages\\Category.vue")
  },
  {
    path: "/brand/",
    component: () => import(/* webpackChunkName: "page--src-pages-brand-vue" */ "C:\\Users\\guest\\Desktop\\donde-comprar\\website\\src\\pages\\Brand.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\guest\\Desktop\\donde-comprar\\website\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\guest\\Desktop\\donde-comprar\\website\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\guest\\Desktop\\donde-comprar\\website\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\guest\\Desktop\\donde-comprar\\website\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

