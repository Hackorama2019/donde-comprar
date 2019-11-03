<template>
  <HomeLayout>
    <!-- Start dondecomprar_top_category section -->
    <section class="dondecomprar_top_category top_category_1 dark_bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-12" v-for="(category, key) in categories" :key="key">
            <Category :icon="category.icon" :category="category.category"></Category>
          </div>
        </div>
      </div>
    </section>
    <!-- End dondecomprar_top_category section -->
  </HomeLayout>
</template>

<script>
import HomeLayout from '~/layouts/Home'
import Category from '~/components/Category'

export default {
  components: {
    HomeLayout,
    Category
  },
  data () {
    return {
      categories: [
        { icon: 'fas fa-laptop', category: 'COMPUTADORAS' },
        { icon: 'fas fa-microchip', category: 'PROCESADORES' },
        { icon: 'fas fa-memory', category: 'MEMORIAS' },
        { icon: 'fas fa-ethernet', category: 'REDES' },
        { icon: 'fas fa-headphones', category: 'AUDIO' },
        { icon: 'fas fa-hdd', category: 'DISCOS' }
      ]
    }
  }
}
</script>
