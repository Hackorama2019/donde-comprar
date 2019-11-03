<template>
  <div class="layout">
    <Header></Header>
    <!--g-link to="/">{{ $static.metadata.siteName }}</g-link-->
    <slot/>
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '~/components/HomeHeader'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
