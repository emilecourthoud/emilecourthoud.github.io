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



//Navigation bar
  (() => {
    'use strict';
  
    let refOffset = 0;
    const bannerHeight = 77;
    const bannerWrapper = document.querySelector('nav.navbar');
  
    const handler = () => {
      const newOffset = window.scrollY || window.pageYOffset;
  
      if (newOffset > bannerHeight) {
        if (newOffset > refOffset) {
          bannerWrapper.classList.remove('animateIn');
          bannerWrapper.classList.add('animateOut');
        } else {
          bannerWrapper.classList.remove('animateOut');
          bannerWrapper.classList.add('animateIn');
        }
        //banner.style.background = 'rgba(162, 197, 35, 0.6)';
        refOffset = newOffset;
      } else {
        //banner.style.backgroundColor = 'rgba(162, 197, 35, 1)';
      }
    };
  
    window.addEventListener('scroll', handler, false);
  })();













  // Fixed navbar
  $(window).scroll(function () {

    var scrollTop = $(window).scrollTop();

    //if ($(document).scrollTop() > 500) { // check if user scrolled more than 50 from top of the browser window
    //  $(".navbar-default").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    //  $(".navbar-default").css("font", "50px"); 
    //}

    if (scrollTop > window.innerHeight) {
      $('.navbar-default').css('background-color', 'rgba(47, 79, 79, 1.0)');
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');

    } else if (scrollTop <= window.innerHeight) {
      $('.navbar-default').css('background-color', 'rgba(47, 79, 79, 0.0)');
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');
      //$('.navbar-default').removeClass('fixed-to-top');
      //$('.navbar-default').css('display', 'none');
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






// #########################
// ###### Paddles ##########
// #########################



// paddles
var leftPaddle = document.getElementsByClassName('left-paddle');
var rightPaddle = document.getElementsByClassName('right-paddle');
// get items dimensions

var flipBox = document.getElementsByClassName('flip-box');
var itemSize = $('.flip-box').outerWidth(true);
// duration of scroll animation
var scrollDuration = 1.25*itemSize;
// get some relevant size for the paddle triggering point
var paddleMargin = 0.5*itemSize;



var itemsLength = 12

// get wrapper width
var getMenuWrapperSize = function() {
	return $('.menu-wrapper').outerWidth();
}
var menuWrapperSize = getMenuWrapperSize();
// the wrapper is responsive
$(window).on('resize', function() {
	menuWrapperSize = getMenuWrapperSize();
});
// size of the visible part of the menu is equal as the wrapper size 
var menuVisibleSize = menuWrapperSize;

// get total width of all menu items
var getMenuSize = function() {
	return itemsLength * itemSize;
};
var menuSize = getMenuSize();
// get how much of menu is invisible
var menuInvisibleSize = menuSize - menuWrapperSize;

// get how much have we scrolled to the left
var getMenuPosition = function() {
	return $('.menu').scrollLeft();
};

// finally, what happens when we are actually scrolling the menu
$('.menu').on('scroll', function() {

	// get how much of menu is invisible
	menuInvisibleSize = menuSize - menuWrapperSize;
	// get how much have we scrolled so far
	var menuPosition = getMenuPosition();

	var menuEndOffset = menuInvisibleSize - paddleMargin;

	// show & hide the paddles 
	// depending on scroll position
	if (menuPosition <= paddleMargin) {
		$(leftPaddle).addClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition < menuEndOffset) {
		// show both paddles in the middle
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).removeClass('hidden');
	} else if (menuPosition >= menuEndOffset) {
		$(leftPaddle).removeClass('hidden');
		$(rightPaddle).addClass('hidden');
}

	// print important values
	$('#print-wrapper-size span').text(menuWrapperSize);
	$('#print-menu-size span').text(menuSize);
	$('#print-menu-invisible-size span').text(menuInvisibleSize);
  $('#print-menu-position span').text(menuPosition);
  
});


// scroll to left
$(rightPaddle).on('click', function() {
  var itemSize = $('.flip-box').outerWidth(true);
  event.preventDefault();
  $('.menu').animate({scrollLeft:'+='+itemSize},scrollDuration);
});

// scroll to right
$(leftPaddle).on('click', function() {
  var itemSize = $('.flip-box').outerWidth(true);
  event.preventDefault();
  $('.menu').animate({scrollLeft:'-='+itemSize},scrollDuration);
});