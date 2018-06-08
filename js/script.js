(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.frontend', {
    duration: 600,
    origin: 'bottom',
    afterReveal: function () {
      $('#hcj-bar').addClass('width-95');
      $('#js-bar').addClass('width-90');
      $('#vue-bar').addClass('width-80');
      $('#bw-bar').addClass('width-95 ');
    },
  });
  sr.reveal('.backend', {
    duration: 1000,
    origin: 'bottom',
    afterReveal: function () {
      $('#pl-bar').addClass('width-90');
      $('#java-bar').addClass('width-85');
      $('#python-bar').addClass('width-70');
      $('#ne-bar').addClass('width-70');
    },
  });
  sr.reveal('.database', {
    duration: 1600,
    origin: 'bottom',
    afterReveal: function () {
      $('#mysql-bar').addClass('width-90');
      $('#mongodb-bar').addClass('width-70');
    },
  });
  sr.reveal('.title-box',{
    duration: 600,
    delay: 100,
    opacity: 0,
    origin:'left'
  })
})(jQuery); // End of use strict

