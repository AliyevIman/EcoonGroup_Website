"use strict";

// NAv -menu toggle menu
jQuery(document).ready(function ($) {

  $("#header .bars img ").click(function () {
    $("#header .bars ul,body").toggleClass("active");

  })


})
// NAv -menu toggle menu


// Tab Menu
// $(document).ready(function(){
	
// 	$('ul.tabs li').click(function(){
// 		var tab_id = $(this).attr('data-tab');

// 		$('ul.tabs li').removeClass('current');
// 		$('.tab-content').removeClass('current');

// 		$(this).addClass('current');
// 		$("#"+tab_id).addClass('current');
// 	})

// })

// Tab Menu

  $(function() {
    $("#projects .images").hide();  
    $("#projects .images").first().show();  

    $("#projects .tab li").on("click", function() {
      let sira = $(this).index();  

      $("#projects .images").hide();  
      $("#projects .images").eq(sira).show(); 
      
      $("#projects .tab li").removeClass("active"); 
      $(this).addClass("active");  
    });
  });




// Slick
$(document).ready(function(){

  $('.slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    autoplay:true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    
})
// Slick

// Footer language tab menu
$(function() {
  $("#projects .images").first().show();  

  $("#footer .footer-head .left-footer .left-body ul li p").on("click", function() {
    let sira = $(this).index();  

    
    $("#footer .footer-head .left-footer .left-body ul li p").removeClass("active"); 
    $(this).addClass("active");  
  });
});
// Footer language tab menu
$("a[href='#contact']").click(function() {
  window.scrollTo(0, document.body.scrollHeight);

  return false;
});