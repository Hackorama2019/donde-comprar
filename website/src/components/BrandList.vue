<template lang="pug">
  .widget_box.categories_box
    .wb_title
      h5 Marcas
    ul.wb_link
      li(v-for='(brand, key) in brands', :key='key')
        a(:href="'/brand/' + brand.slug")
          | {{ brand.name }}
          span {{ brand.total || '' }}
</template>

<script>
export default {
  props: {
    brands: {
      type: Array,
      required: true
    }
  }
}
</script>
