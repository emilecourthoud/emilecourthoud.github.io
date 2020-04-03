(function ($) {

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  //navigation
  $('.navigation').onePageNav({
    scrollOffset: 0
  });

  $(".navbar-collapse a").on('click', function () {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //

  // Smooth scroll for the get started button
  $('.btn-get-started').on('click', function(e) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top 
        }, 700);
      }
  });

  // Fixed navbar
  $(window).scroll(function () {

    var scrollTop = $(window).scrollTop();

    //if ($(document).scrollTop() > 500) { // check if user scrolled more than 50 from top of the browser window
    //  $(".navbar-default").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    //  $(".navbar-default").css("font", "50px"); 
    //}

    if (scrollTop > 200) {
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');

    } else if (scrollTop <= 200) {
      $('.navbar-default').removeClass('fixed-to-top');
    }
  });

  // Intro carousel
  var introCarousel = $("#introCarousel");
  var introCarouselIndicators = $("#intro-carousel-indicators");
  introCarousel.find(".carousel-inner").children(".item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");

    $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') +"')");
    $(this).children('.carousel-background').remove();
  });

  // introCarousel.on('slid.bs.carousel', function (e) {
  //   $(this).find('h2').addClass('animated fadeInDown');
  //   $(this).find('p').addClass('animated fadeInUp');
  //   $(this).find('.btn-get-started').addClass('animated fadeInUp');
  // });


  //if (location.href != "https://emilecourthoud.github.io/#about")
  //{
  //  $('.navbar-default').removeClass('fixed-to-top');
  //}


  function navbar() {

    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('show-nav');
    } else {
      $('#navigation').removeClass('show-nav');
    }

  }

  $(document).ready(function () {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function () {
        navbar();
      });
    }

  });


  $(window).resize(function () {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function () {
        navbar();
      });
    }

  });


  // Carousel
  $('.service .carousel').carousel({
    interval: 4000
  })

  //works
  $(function () {
    Grid.init();
  });

  //animation
  new WOW().init();

})(jQuery);
