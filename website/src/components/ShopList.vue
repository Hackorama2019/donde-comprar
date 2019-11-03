<template lang="pug">
  .widget_box.categories_box
    .wb_title
      h5 Tiendas
    ul.wb_link
      li(v-for='(shop, key) in shops', :key='key')
        a(:href="'/shop/' + shop.slug")
          | {{ shop.name }}
          span {{ shop.total || '' }}
</template>

<script>    
export default {
  props: {
    shops: {
      type: Array,
      required: true
    }
  }
}
</script>