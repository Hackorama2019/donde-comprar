<template>
  <div class="container">
    <pre>{{ brand }}</pre>
    <pre>{{ products }}</pre>
  </div>
</template>

<page-query>
query getBrandById($id: ID!) {
  brand: brand (id: $id) {
    id,
    slug,
    name
  },
  products: allProduct(filter: { brand: { eq: $id }}) {
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
}
</page-query>

<script>
export default {
  computed: {
    brand () {
      return this.$page.brand
    },
    products () {
      return this.$page.products.edges.map(({ node }) => node)
    }
  }
}
</script>
