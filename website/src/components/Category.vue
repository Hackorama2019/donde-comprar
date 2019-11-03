<template>
  <div class="category_box category_box_1">
    <a href="productos_listing.html" class="category_featured">
      <div class="category_icon">
        <i :class="[icon]"></i>
      </div>
      <div class="category_info">
        <h5>{{ category }}</h5>
      </div>
    </a>
  </div>
</template>

<script>
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
  }
}
</script>
