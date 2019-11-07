<template lang="pug">
  //- Start dondecomprar_breadcrumb section
  section.dondecomprar_breadcrumb.dondecomprar_breadcrumb_1
    svg#shape_1(width='272px', height='272px')
      path(fill-rule='evenodd', fill='rgb(255, 255, 255)', d='M136.000,-0.000 C211.111,-0.000 272.000,60.889 272.000,136.000 C272.000,211.111 211.111,272.000 136.000,272.000 C60.889,272.000 -0.000,211.111 -0.000,136.000 C-0.000,60.889 60.889,-0.000 136.000,-0.000 Z')
    svg#shape_2(width='272px', height='272px')
      path(fill-rule='evenodd', fill='rgb(255, 255, 255)', d='M136.000,-0.000 C211.111,-0.000 272.000,60.889 272.000,136.000 C272.000,211.111 211.111,272.000 136.000,272.000 C60.889,272.000 -0.000,211.111 -0.000,136.000 C-0.000,60.889 60.889,-0.000 136.000,-0.000 Z')
    .container
      .row.justify-content-center
        .col-lg-4
          .breadcrumb_content.text-center
            h2 {{ title }}
  //- End dondecomprar_breadcrumb section
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default() {
        return 'Tus Resultados'
      }
    },
    image: {
      type: String,
      required: false,
      default() {
        return null
      } 
    }
  }
}
</script>