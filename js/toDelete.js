(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
      if ($(document).scrollTop() > 10) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        $(".navbar-fixed-top").css("font", "20px"); 
      } else {
        $(".navbar-fixed-top").css("background-color", "#000000"); // if not, change it back to transparent
        $(".navbar-fixed-top").css("font", "40px")
      }
    });
  });