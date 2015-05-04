$(document).ready(function(){

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


// Add/Remove Project Slideshow

$(function() {
  $(".clickable1").click(function() {

      $('.banner').addClass("hidden", {duration:2000,effect:'blind'});

      $('.project1').removeClass("hidden", {duration:2000,effect:'blind'});

      $('.project2').addClass("hidden", {duration:2000,effect:'blind'});

  });
});

$(function() {
  $(".clickable2").click(function() {

      $('.banner').addClass("hidden");

      $('.project2').removeClass("hidden");

      $('.project1').addClass("hidden");

  });
});

// Banner typing letter

$(function(){
    $(".element").typed({
      strings: ["Web Development and Design", "Branding and Marketing", "MyFantasyLeague.com Templates", "eCommerce Websites"],
      typeSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: false
    });
});

//Project Header Fixed Scroll

$('.container').stickem('start: 100px');


// Reverse Color Scheme

$('.my-logo').on('click', function(e) {
      $('.project-wrap').toggleClass("project-wrap-reverse");
      $('.my-logo').toggleClass("my-logo-blue");
      $('.element').toggleClass("element-reverse");
      $('.reverse-button').toggleClass("reverse-reverse");
      $('.header-nav').toggleClass("header-nav-reverse");
      $('.navbar').toggleClass("navbar-inverse");

      e.preventDefault();
    });
