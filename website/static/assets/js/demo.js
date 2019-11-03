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
    /*----------------------
        wow js
    ------------------------*/
    new WOW().init();
    /*----------------------
        wow js
    ------------------------*/
})(window.jQuery);   