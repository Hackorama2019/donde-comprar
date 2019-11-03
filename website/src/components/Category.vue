<template lang="pug">
  .category_box.category_box_1
    a.category_featured(:href="'/category/' + slugify(category)")
      .category_icon
        i(:class='[icon]')
      .category_info
        h5 {{ category }}
</template>

<script>
import { slugify } from '~/utils'

export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  methods: {
    slugify
  }
}
</script>
