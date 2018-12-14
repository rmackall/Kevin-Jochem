/*!
 * Start Bootstrap - Vitality v3.0.1 (https://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under  (https://github.com/BlackrockDigital/startbootstrap-vitality/blob/master/LICENSE)
 */

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 66)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Closes navbar dropdown menu when a scroll trigger link is clicked
  $('.dropdown-menu .js-scroll-trigger').click(function() {
    $("#portfolioDropdown").dropdown("toggle");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#navbar-main',
    offset: 150
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#navbar-main").offset().top > 100) {
      $("#navbar-main").addClass("collapsed");
    } else {
      $("#navbar-main").removeClass("collapsed");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Slick Carousel Calls
  $('.carousel-team').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<div class="slick-prev"><i class="fa fa-angle-right fa-fw"></i></div>',
    prevArrow: '<div class="slick-next"><i class="fa fa-angle-left fa-fw"></i></div>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.carousel-portfolio').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<div class="slick-prev"><i class="fa fa-angle-right fa-fw"></i></div>',
    prevArrow: '<div class="slick-next"><i class="fa fa-angle-left fa-fw"></i></div>',
  });

  $('.carousel-testimonials').slick({
    infinite: true,
    nextArrow: '<div class="slick-prev"><i class="fa fa-angle-right fa-fw"></i></div>',
    prevArrow: '<div class="slick-next"><i class="fa fa-angle-left fa-fw"></i></div>',
  });

  // Activates floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

})(jQuery); // End of use strict
