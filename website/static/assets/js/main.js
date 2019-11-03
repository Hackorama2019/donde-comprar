(function($) {
  'use strict';  
    /*---------------------------------
        Preloader JS
    -----------------------------------*/ 
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.spinner');
        var preloaderArea = jQuery('.preloader_area');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
    /*---------------------------------
        Preloader JS
    -----------------------------------*/

    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
         if (scroll < 100) {
          $(".header_area").removeClass("sticky");
         }else{
          $(".header_area").addClass("sticky");
         }
    }); 
    /*---------------------------------  
        sticky header JS
    -----------------------------------*/
    /*---------------------- 
        Scroll top js
    ------------------------*/
     $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
          $('#scroll_top').fadeIn();
      } else {
          $('#scroll_top').fadeOut();
      }
    });
    $('#scroll_top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*---------------------- 
        Scroll top js
    ------------------------*/
    $(".menu_icon").on('click', function (e) {
      e.preventDefault();
      $(".menu_icon").toggleClass("active");
    });
    $(".menu_icon").on('click', function (e) {
      e.preventDefault();
      $(".sidenav_menu").toggleClass("active");
    });
    $.sidebarMenu($('.sidebar-menu'))
    /*------
    /*---------------------- 
        slider js
    ------------------------*/
    $('.client_slider_1').slick({
      dots: true,
      infinite: true,
      arrows: false,
      autoplay:true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    });
    $('.place_slider').slick({
      dots: false,
      infinite: true,
      arrows: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.client_slider_2').slick({
      dots: true,
      infinite: true,
      arrows: false,
      autoplay:false,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.gallery_big').slick({
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.gallery_small'
    });
    $('.gallery_small').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.gallery_big',
      dots: false,
      arrows: false,
      focusOnSelect: true
    });
    $('.sponser_slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 400,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
      {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    /*---------------------- 
        slider js
    ------------------------*/  
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    $('.play_btn').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    /*---------------------- 
        magnific-Popup js
    ----------------------*/
    /*---------------------- 
        Isotope js
    ------------------------*/ 
    $('#explore_dream').imagesLoaded( function() {
        var $grid = $('.dream_grid').isotope({
            itemSelector: '.grid_item',
            layoutMode: 'fitRows'
        })
        $('.listghor_filter').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
        });
        $('.listghor_filter').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function () {
                $buttonGroup.find('.btn_active').removeClass('btn_active');
                $(this).addClass('btn_active');
            });
        });
    });
    /*----------------------
        Counter js
    ------------------------*/
    $('.counter').counterUp({
        delay: 1,
        time: 1000,
    });
    /*----------------------
        datepicker js
    ------------------------*/
    $( function(){
      $( "#datepicker" ).datepicker();
    });
    /*----------------------
        nice select js
    ------------------------*/
    $(document).ready(function() {
      $('.search_select').niceSelect();
    });
    /*----------------------
        wow js
    ------------------------*/
    new WOW().init();
    /*----------------------
        wow js
    ------------------------*/

})(window.jQuery);   