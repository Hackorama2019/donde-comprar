<template>
    <div class="container">
        <pre>{{ shop }}</pre>
        <pre>{{ products }}</pre>
    </div>
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
export default {
  computed: {
    shop () {
      return this.$page.shops.edges.map(({ node }) => node)
    }
  }
}
</script>
