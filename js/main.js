$(function($) {
    $('.bg-swicher').bgSwitcher({
        images: ['images/yume_1.jpg','images/yume_2.jpg','images/yume_3.jpg','images/yume_4.jpg'],
        interval: 2000,
        loop: true
    });

    
     $('.slider').slick({
         arrows: true,
         autoplay: true,
         dots: false,
         centerMode: true,
         centerPadding: '30%', 
         autoplaySpeed: 2500,
     });

    

 });




   
    