
// NAv -menu toggle menu
$("#header .bars img ").click(function () {
    $("#header .bars ul").toggleClass("active");
})
$('body').click(function() {
    // no need for an if statement here, just use a selector that matches the active elements:
    $('#header .bars ul.active').removeClass('active');
    $('body').off('click'); // cancel the body's click handler when it's used
  });
  e.stopPropagation(); 
// NAv -menu toggle menu
