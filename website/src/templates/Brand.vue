<template lang="pug">
  Layout
    Breadcrumb(:title="brand.name")
    // - Start dondecomprar_listing_list section
    section.dondecomprar_listing_list.dondecomprar_listing_list_2.section_padding.wow.fadeInUp
      .container
        .row
          .col-lg-4
            // - Start Sidebar Izquierda
            .dondecomprar_sidebar.listing_page_sidebar
              // - Start Categorias
              // - End Categorias
              // - Start Marcas
              CategoryList(:categories='categories')
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

<page-query>
query getBrandById($id: ID!) {
  brand: brand (id: $id) {
    id,
    slug,
    name
  },
  allCategory {
    edges {
      node {
        id
        slug
        name
      }
    }
  }
  allProduct (filter: { brand: { eq: $id }}) {
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
      }
    }
  }
}
</page-query>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import CategoryList from '~/components/CategoryList'
import Product from '~/components/Product'

export default {
  components: {
    CategoryList,
    Breadcrumb,
    Product
  },
  computed: {
    brand () {
      return this.$page.brand
    },
    products () {
      return this.$page.allProduct.edges.map(({ node }) => node)
    },
    categories () {
      return this.$page.allCategory.edges.map(({ node }) => node)
    }
  }
}
</script>
