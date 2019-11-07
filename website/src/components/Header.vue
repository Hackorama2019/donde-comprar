<template lang="pug">
  // - Start Header_area
  header.header_area.header_area_1
    .container
      // - Site Menu
      .site_menu
        .row.align-items-center
          .col-lg-3
            .dondecomprar_logo
              g-link.logo(to='/')
                img(src='/assets/images/logo.png', alt='')
          .col-lg-9
            .dondecomprar_menu
              nav.main_menu
                ul
                  li.menu-item
                    a(href='#') Nosotros
                  li.menu-item
                    a(href='#') Blog
                  li.menu-item
                    a(href='/contacto.html') Contacto
      // - End Site Menu
      // - Mobile Menu
      .mobile_menu
        .row.align-items-center
          .col-md-4.col-6
            .mobile_menu_logo
              g-link.logo(to='/')
                img(src='/assets/images/logo.png', alt='')
          .col-md-8.col-6
            .mobile_menu_icon
              a.menu_icon(href='#')
                i.fas.fa-bars
        .sidenav_menu
          .times_icon
            a.menu_icon(href='#')
              i.fas.fa-times
          .brand_logo.text-center
            a.logo(href='index.html')
              img(src='/assets/images/logo.png', alt='')
          .sidebar_search
            input(type='text', placeholder='¿Que quieres comprar hoy?')
          ul.sidebar-menu
            li
              a(href='#') Nosotros
            li
              a(href='#') Blog
            li
              a(href='contact.html') Contacto
      // - mobile menu
  // - End header_area
</template>
