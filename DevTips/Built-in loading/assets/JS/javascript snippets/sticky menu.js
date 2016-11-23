$(function () {



  var $stickyClone = $('.sticky').clone(true).appendTo('body').css({'position': 'fixed', 'top': '0%', 'left': '50%', 'transform':'translateX(-50%)', 'display':'none'})

  $(window).scroll(function () {
    var wScroll = $(window).scrollTop()
    if (wScroll >= $('.sticky').offset().top) {
      $stickyClone.css('display','block')
    } else {
      $stickyClone.css('display','none')
    }
  })


});
