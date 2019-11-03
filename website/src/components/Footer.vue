<template lang="pug">
// Start Footer
footer.dondecomprar_foooter.dark_bg.dondecomprar_foooter_1
  .container
    .footer_widget.footer_widget_1
      .row
        .col-lg-4.col-md-6.col-sm-12
          .widget_box.widget_box_1.widget_about_1.wow.fadeInUp
            .widget_title
              img(src='/assets/images/logo.png', alt='')
            .widget_content
              p Una plataforma donde puedes comparar el mismo producto en diversas plataformas.
              ul.social_link
                li
                  a(href='https://www.facebook.com/')
                    i.fab.fa-facebook-f
                li
                  a(href='https://twitter.com/')
                    i.fab.fa-twitter
                li
                  a(href='https://www.instagram.com/')
                    i.fab.fa-instagram
        .col-lg-3.offset-lg-2.col-md-6.col-sm-12
          .widget_box.widget_box_1.wow.fadeInUp
            .widget_title
              h4 Links de Ayuda
            .widget_content
              ul.widget_link
                li
                  a(href='#') Nosotros
                li
                  a(href='#') Blog
                li
                  a(href='#') Contacto
        .col-lg-3.col-md-6.col-sm-12
          .widget_box.widget_box_1.wow.fadeInUp
            .widget_title
              h4 Contactanos
            .widget_content.contact_widget_info
              .widget_content_list
                .list_icon
                  i.fas.fa-map-marker-alt
                .list_info
                  p
                    | Avenida Venustiano Carranza 1248-A,
                    br
                    | Sta Bárbara, 28017 Colima, Col.
              .widget_content_list
                .list_icon
                  i.far.fa-envelope
                .list_info
                  p
                    a(href='mailto:hola@dondecomprar.com') hola@dondecomprar.com
              .widget_content_list
                .list_icon
                  i.fas.fa-phone
                .list_info
                  p
                    a(href='tel:3123236909') 312 323 6909
    // Start Footer Text Copyright
    .footer_copyright.footer_copyright_1
      .row
        .col-lg-6.col-md-6.col-sm-12
          .copyright_link
            ul
              li
                a(href='#') Politica de Privacidad
              li
                a(href='#') Preguntas
              li
                a(href='#') Terminos de Servicio
        .col-lg-6.col-md-6.col-sm-12
          .copyright_text
            p
              | Copyright © 2019  |  Hecho con  
              i.fas.fa-heart
              |   por Code Lovers.
    // End Footer Text Copyright
// End Footer
</template>
