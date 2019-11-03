<template>
  <pre>shop</pre>
</template>

<!--page-query>
query getSchopById($id: ID!) {
  shop: shop (id: $id) {
    id
    slug
    name
  }
  products: allProduct(filter: { shop: { eq: $id }}) {
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
  shop: {
    category () {
      return this.$page.category
    },
    products () {
      return this.$page.products.edges.map(({ node }) => node)
    }
  }
}
</script-->
