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




/*
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
        banner.style.background = 'rgba(162, 197, 35, 0.6)';
        refOffset = newOffset;
      } else {
        banner.style.backgroundColor = 'rgba(162, 197, 35, 1)';
      }
    };
  
    window.addEventListener('scroll', handler, false);
  })();
*/

// Fixed navbar
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var heightChange = 10; //  window.innerHeigh
  //if (scrollTop > window.innerHeight) {
  if (scrollTop > heightChange) {
    $('.navbar-default').css('background-color', 'rgba(18, 56, 121, 0.95)');
    $('.navbar-default').css('display', 'block');
    $('.navbar-default').addClass('fixed-to-top');

  } else if (scrollTop <= heightChange) {
    $('.navbar-default').css('background-color', 'rgba(18, 56, 121, 0.0)');
    $('.navbar-default').css('display', 'block');
    $('.navbar-default').addClass('fixed-to-top');
  }
});


/*
  // Fixed navbar
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var heightChange = 0; //  window.innerHeigh
    //if (scrollTop > window.innerHeight) {
    if (scrollTop > heightChange) {
      //$('.navbar-default').css('background-color', 'rgba(47, 79, 79, 1.0)');
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');

    } else if (scrollTop <= heightChange) {
      //$('.navbar-default').css('background-color', 'rgba(47, 79, 79, 0.0)');
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');
    }
  });
  */


//$("nav").hide();
/*
$("nav").fadeOut('slow');

$("html").mousemove(function( event ) {
  $("nav").show();

    myStopFunction();
    myFunction();
});

function myFunction() {
    myVar = setTimeout(function(){
       $("nav").fadeOut(1500);
      //$("nav").hide();
    }, 1500);
}
function myStopFunction() {
    if(typeof myVar != 'undefined'){
        clearTimeout(myVar);
    }
}
*/



/*
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
  */




// #########################
// ###### Leaflet ##########
// #########################

var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);



// #########################
// ###### Paddles ##########
// #########################



  // paddles
  var leftPaddle = document.getElementsByClassName('left-paddle');
  var rightPaddle = document.getElementsByClassName('right-paddle');
  var menuImages = document.getElementsByClassName('menu');
  // get items dimensions

  var flipBox = document.getElementsByClassName('flip-box');
  var itemSize = $('.flip-box').outerWidth(true);
  // duration of scroll animation
  var scrollDuration = 300*itemSize;
  // get some relevant size for the paddle triggering point


  /*
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
    return $(menuImages).scrollLeft();
  };

  // finally, what happens when we are actually scrolling the menu
  $(menuImages).on('scroll', function() {

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
  

  // update the variables
  var getMenuWrapperSize = function() {
    return $('.menu-wrapper').outerWidth();
  }
  */


  $(document.getElementsByClassName('right_VDA')).on('click', function() {
    updateMenuCountry('VDA');scrollToLeft();});
  $(document.getElementsByClassName('left_VDA')).on('click', function() { 
    updateMenuCountry('VDA');scrollToRight();});

  $(document.getElementsByClassName('right_CH')).on('click', function() {
    updateMenuCountry('CH');scrollToLeft();});
  $(document.getElementsByClassName('left_CH')).on('click', function() {
    updateMenuCountry('CH');scrollToRight();});

  $(document.getElementsByClassName('right_PK')).on('click', function() {
    updateMenuCountry('PK');scrollToLeft();});
  $(document.getElementsByClassName('left_PK')).on('click', function() {
    updateMenuCountry('PK');scrollToRight();});

  $(document.getElementsByClassName('right_DE')).on('click', function() {
    updateMenuCountry('DE');scrollToLeft();});
  $(document.getElementsByClassName('left_DE')).on('click', function() {
    updateMenuCountry('DE');scrollToRight();});

  $(document.getElementsByClassName('right_IT')).on('click', function() {
    updateMenuCountry('IT');scrollToLeft();});
  $(document.getElementsByClassName('left_IT')).on('click', function() {
    updateMenuCountry('IT');scrollToRight();});


  var updateMenuCountry = function(countryName) {
    rightPaddle = document.getElementsByClassName('right_'.concat(countryName));
    leftPaddle  = document.getElementsByClassName('left_'.concat(countryName));
    menuImages = document.getElementsByClassName('menu_'.concat(countryName));
  }

  // scroll to left
  var scrollToLeft = function() {
    var itemSize = $('.flip-box').outerWidth(true);
    event.preventDefault();
    $(menuImages).animate({scrollLeft:'+='+itemSize},scrollDuration);
  };

  // scroll to right
  var scrollToRight = function() {
    var itemSize = $('.flip-box').outerWidth(true);
    event.preventDefault();
    $(menuImages).animate({scrollLeft:'-='+itemSize},scrollDuration);
  };





// define a resize function. use a closure for the lastBoundry determined.
var resizeFn = function(){
    return function(){
        var screenWidth = window.innerWidth; // get the window's inner width
        var screenHeight = window.innerHeight; // get the window's inner height
        var itemWidth = $('.flip-box').outerWidth(true);
        var itemHeight = $('.flip-box').outerHeight(true)

      
        var scalingFactor = 0.6;
        var ratioWidthHeight = 500/400;
        if(itemWidth/screenWidth > itemHeight/screenHeight){
          $('.menu').height(scalingFactor * screenWidth/ratioWidthHeight);
          $('.flip-box').width(scalingFactor * screenWidth);
        }else{
          $('.menu').height(scalingFactor * screenHeight);
          $('.flip-box').width(scalingFactor * screenHeight*ratioWidthHeight);
        }
        /*
        if(itemWidth > 0.7 * screenWidth){
          $('.menu').height(itemHeight * 0.7 * screenWidth/itemWidth);
          $('.flip-box').width(0.7 * screenWidth);
        }else{
          $('.menu').height(350);
          $('.flip-box').width(450);
        }
        */
    }
};
$(window).resize(resizeFn()); // bind the resize event handler
$(document).ready(function(){
    $(window).trigger('resize'); // on load, init the lastBoundry
});





// #############################
// ### IMPORT HTML INTO HTML ###
// #############################
$(function(){
  $("#includedContent").load("courses_content/chapter_1.html"); 
});









  
})(jQuery);
