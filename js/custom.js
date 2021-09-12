/* ================================================================
                                 services
===================================================================*/

$(function () {
  new WOW().init();

});
/* ================================================================
                                 work
===================================================================*/
$(function () {
  $("#work").magnificPopup({
    delegate: 'a',//child item selector by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }

  });


});

/* ================================================================
                                 team
===================================================================*/

$(document).ready(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 300,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
    }
  });
});

/* ================================================================
                               testimonial
===================================================================*/
$(document).ready(function () {
  $("#customer-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 300,
    loop: true,
    autoplayHoverPause: true,
  });
});
/* ================================================================
                            counter-effect
===================================================================*/
$(document).ready(function () {

  $('.counter').counterUp({
    delay: 10,
    time: 3000
  });

});

/* ================================================================
                                 client
===================================================================*/

$(document).ready(function () {
  $("#clients-list").owlCarousel({
    items: 5,
    autoplay: true,
    smartSpeed: 300,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
    }
  });
});

/* ================================================================
                                 navigation
===================================================================*/
//for show and hide the navigation black background

$(document).ready(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() < 50) {
      //hide nav
      $("nav").removeClass("wego-top-nav");
      $("#back-to-top").fadeOut();

    }
    else {
      // show nav
      $("nav").addClass("wego-top-nav");
      $("#back-to-top").fadeIn();
    }

  });

});

//smooth scrolling
$(document).ready(function () {

  $("a.smooth-scroll").click(function (event) {

    event.preventDefault();

    //get/return id like #about , #teak etc
    var section = $(this).attr("href");

    $('html, body').animate({

      scrollTop: $(section).offset().top - 70

    }, 800, "easeInOutExpo");

  });

});

// mobile menu setting when click on any link toggle button auto click

$(document).ready(function () {

  $(".navbar-collapse ul li a").on("click touch", function () {

    $(".navbar-toggle").click();

  });

});