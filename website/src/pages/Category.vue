<template>
  <Layout>
    <pre>{{ categories }}</pre>
  </Layout>
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
export default {
  computed: {
    categories () {
      return this.$static.allCategory.edges.map(({ node }) => node)
    }
  }
}
</script>
