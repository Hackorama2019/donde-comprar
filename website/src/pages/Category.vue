<template lang="pug">
  Layout
    Breadcrumb(title="Categorias")
    section.section_padding.wow.fadeInUp
      .container
        .row
          CategoryList(:categories="categories")
</template>

<static-query>
query getAllCategories {
  allCategory {
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
import CategoryList from '~/components/CategoryList'

export default {
  components: {
    Breadcrumb,
    CategoryList
  },
  computed: {
    categories () {
      return this.$static.allCategory.edges.map(({ node }) => node)
    }
  }
}
</script>
