<template lang="pug">
  Layout
    Breadcrumb
    // - Start dondecomprar_listing_list section
    section.dondecomprar_listing_list.dondecomprar_listing_list_2.section_padding.wow.fadeInUp
      .container
        .row
          .col-lg-4
            // - Start Sidebar Izquierda
            .dondecomprar_sidebar.listing_page_sidebar
              // - Start Categorias
              CategoryList(:categories='categories')
              // - End Categorias
              // - Start Marcas
              BrandList(:brands='brands')
              // - End Marcas
              // - Start Ratings Recientes
              // -.widget_box.news_box
                .wb_title
                  h5 Listado Reciente
                .wb_news_list
                  .single_wb_news
                    .news_thumb
                      img(src='/assets/images/thumb_1.jpg', alt='')
                    .news_info
                      h2
                        a(href='#') Computadora ASUS 2019 ultima generación i9 core
                      p 23 May 2019
                  .single_wb_news
                    .news_thumb
                      img(src='/assets/images/thumb_1.jpg', alt='')
                    .news_info
                      h2
                        a(href='#') Computadora ASUS 2019 ultima generación i9 core.
                      p 23 May 2019
                  .single_wb_news
                    .news_thumb
                      img(src='/assets/images/thumb_1.jpg', alt='')
                    .news_info
                      h2
                        a(href='#') Computadora ASUS 2019 ultima generación i9 core.
                      p 23 May 2019
              // - End Ratings Recientes
              // - End Sidebar Izquierda
          .col-lg-8
            // - Start Listado de Productos
            .dondecomprar_listing_main
              template(v-for='(product, key) in products')
                Product(:key='key', :product='product')
            // - End Listado de Productos
</template>

<static-query>
query getAllProducts {
  allProduct {
    edges {
      node {
        id
        slug
        name
        content
        model
        images
        price {
          url
          price
          discountPrice
        }
        category {
          name
          path
        }
        brand {
          name
          path
        }
      }
    }
  }
  allCategory {
    edges {
      node {
        id
        slug
        name
      }
    }
  }
  allBrand {
    edges {
      node {
        id
        slug
        name
      }
    }
  }
}
</static-query>

<script>
import Product from '~/components/Product'
import CategoryList from '~/components/CategoryList'
import BrandList from '~/components/BrandList'
import Breadcrumb from '~/components/Breadcrumb'

export default {
  components: {
    CategoryList,
    BrandList,
    Breadcrumb,
    Product
  },
  computed: {
    products () {
      return this.$static.allProduct.edges.map(({ node }) => {
        node.price.sort((a, b) => a.discountPrice - b.discountPrice)
        return node
      })
    },
    categories () {
      return this.$static.allCategory.edges.map(({ node }) => node)
    },
    brands () {
      return this.$static.allBrand.edges.map(({ node }) => node)
    }
  },
  methods: {
    getBestPrice ({ price: [{ discountPrice, price }] }) {
      return { price, discountPrice }
    }
  },
  mounted () {
    console.log(this.products)
  }
}
</script>

<style lang="css" scoped>
.card-product:after {
  content: '';
  display: table;
  clear: both;
  visibility: hidden;
}
.card-product .price-new,
.card-product .price {
  margin-right: 5px;
}
.card-product .price-old {
  color: #999;
}
.card-product .img-wrap {
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  position: relative;
  height: 220px;
  text-align: center;
}
.card-product .img-wrap img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}

.card-product .info-wrap {
  overflow: hidden;
  padding: 15px;
  border-top: 1px solid #eee;
}
.card-product .action-wrap {
  padding-top: 4px;
  margin-top: 4px;
}
.card-product .bottom-wrap {
  padding: 15px;
  border-top: 1px solid #eee;
}
.card-product .title {
  margin-top: 0;
}
</style>
