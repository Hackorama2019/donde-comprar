<template>
  <pre>{{ product }}</pre>
</template>

<page-query>
query getProductById($id: ID!) {
  product: product (id: $id) {
    id
    slug
    name
  }
}
</page-query>

<script>
export default {
  computed: {
    product () {
      return this.$page.product
    }
  }
}
</script>
