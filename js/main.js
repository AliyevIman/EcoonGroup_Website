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
