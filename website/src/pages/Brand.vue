<template>
  <pre>{{ brands }}</pre>
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
export default {
  computed: {
    brands () {
      return this.$static.allBrand.edges.map(({ node }) => node)
    }
  }
}
</script>
