$(function () {
  var $win = $(window);
  $win.scroll(function () {
    var wScroll = $win.scrollTop();
    $('.parralax-background').css('backgroundPosition', "center -"+wScroll/2+'%');
  });







});
