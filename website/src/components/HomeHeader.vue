<template>
  <div>
    <!-- Start Header_area -->
    <header class="header_area header_area_1">
      <div class="container">
        <!-- Site Menu -->
        <div class="site_menu">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <div class="dondecomprar_logo">
                <a href="index.html">
                  <img src="assets/images/logo.png" alt />
                </a>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="dondecomprar_menu">
                <nav class="main_menu">
                  <ul>
                    <li class="menu-item">
                      <a href="#">Nosotros</a>
                    </li>
                    <li class="menu-item">
                      <a href="#">Blog</a>
                    </li>
                    <li class="menu-item">
                      <a href="contacto.html">Contacto</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <!-- End Site Menu -->
        <!-- Mobile Menu -->
        <div class="mobile_menu">
          <div class="row align-items-center">
            <div class="col-md-4 col-6">
              <div class="mobile_menu_logo">
                <a href="index.html" class="logo">
                  <img src="assets/images/logo.png" alt />
                </a>
              </div>
            </div>
            <div class="col-md-8 col-6">
              <div class="mobile_menu_icon">
                <a href="#" class="menu_icon">
                  <i class="fas fa-bars"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="sidenav_menu">
            <div class="times_icon">
              <a href="#" class="menu_icon">
                <i class="fas fa-times"></i>
              </a>
            </div>
            <div class="brand_logo text-center">
              <a href="index.html" class="logo">
                <img src="assets/images/logo.png" alt />
              </a>
            </div>
            <div class="sidebar_search">
              <input type="text" placeholder="¿Que quieres comprar hoy?" />
            </div>
            <ul class="sidebar-menu">
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- mobile menu -->
      </div>
    </header>
    <!-- End header_area -->

    <!-- Start header_bg section -->
    <section
      class="header_bg header_bg_1 welcome_section bg_image"
      style="background-image: url(assets/images/head_bg_1.jpg);"
    >
      <div class="dondecomprar_overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-8">
            <div class="welcome_text text-center wow fadeInUp" data-wow-delay=".1s">
              <h1>Que es lo que quieres buscar hoy ?</h1>
              <!-- <p>Facil y Rapido</p> -->
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="filter_form header_filter text-center wow fadeInUp" data-wow-delay=".15s">
              <form>
                <div class="form_group">
                  <input
                    type="text"
                    class="form_control fi_width_1"
                    placeholder="Que es lo que estas buscando?"
                    required
                  />
                  <i class="fas fa-search"></i>
                </div>
                <div class="filter_button">
                  <button class="dondecomprar_btn filter_btn">Buscar</button>
                  <i class="fas fa-search"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Start header_bg section -->
  </div>
</template>
