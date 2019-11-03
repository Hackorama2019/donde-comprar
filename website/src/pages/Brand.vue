<template lang="pug">
  Layout
    Breadcrumb(title="Marcas")
    section.section_padding.wow.fadeInUp
      .container
        .row
          BrandList(:brands="brands")
</template>

<static-query>
query getAllBrands {
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
import Breadcrumb from '~/components/Breadcrumb'
import BrandList from '~/components/BrandList'

export default {
  components: {
    Breadcrumb,
    BrandList
  },
  computed: {
    brands () {
      return this.$static.allBrand.edges.map(({ node }) => node)
    }
  }
}
</script>
