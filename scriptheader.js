$(document).ready(function(){

  $(window).on("scroll touchmove", function () {
    $('#header').toggleClass('tiny', $(document).scrollTop() > 0);
  });

}); 