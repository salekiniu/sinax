$(function(){


//banner slick slider js

$('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade:true,
    autoplaySpeed: 2000,
    arrows:true,
    dots:false,
    prevArrow:'.prev',
    nextArrow:'.next',
  });


//counter up
$('.counter').counterUp({
  delay: 10,
  time: 2000
});
});