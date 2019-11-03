<template>
  <div class="container">
    <pre>{{ category }}</pre>
    <pre>{{ products }}</pre>
  </div>
</template>

<page-query>
query getCategoryById($id: ID!) {
  category: category (id: $id) {
    id
    slug
    name
  }
  products: allProduct(filter: { category: { eq: $id }}) {
    edges {
      node {
        id
        slug
        name
        content
        model
        image
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
}
</page-query>

<script>
export default {
  computed: {
    category () {
      return this.$page.category
    },
    products () {
      return this.$page.products.edges.map(({ node }) => node)
    }
  }
}
</script>
