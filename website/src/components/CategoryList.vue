<template lang="pug">
  .widget_box.categories_box
    .wb_title
      h5 Categorias
    ul.wb_link
      li(v-for='(category, key) in categories', :key='key')
        a(:href="'/category/' + category.slug")
          | {{ category.name }}
          span {{ category.total || '' }}
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>