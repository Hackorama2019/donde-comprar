<template lang="pug">
  Layout
    Breadcrumb(title="Tiendas")
    section.section_padding.wow.fadeInUp
      .container
        .row
          ShopList(:shops="shops")
</template>

<page-query>
query getAllShops {
  shops: allShop {
    edges {
      node {
        id
        slug
        name
        image
      }
    }
  }
}
</page-query>

<script>
import Breadcrumb from '~/components/Breadcrumb'
import ShopList from '~/components/ShopList'

export default {
  components: {
    Breadcrumb,
    ShopList
  },
  computed: {
    shops () {
      return this.$page.shops.edges.map(({ node }) => node)
    }
  }
}
</script>
