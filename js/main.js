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
/////Mose event
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})
/////Mose event


$("#footer .footer-head .left-body ul li p").click(function () {
  $("#footer .footer-head .left-body ul li p").toggleClass("active");
})

$(function() {
  $("#footer .footer-head .left-body ul li p").on("click", function() {
    let sira = $(this).index();  

    // $("#projects .images").hide();  
    // $("#projects .images").eq(sira).show(); 
    
    $("#footer .footer-head .left-body ul li p").removeClass("active"); 
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