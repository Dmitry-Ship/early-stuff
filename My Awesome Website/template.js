$(function () {
  //cash DOM
  var $win = $(window);
  var $mainH1 = $('.logo');
  var $stickyMenu = $('.sticky');
  var $avatar = $('avatar');
  var $quoteSection = $('.quote');
  var $quoteText = $('.text');
  var $footer = $('footer');

  //scroll variables

  var menuTop = $('section').offset().top-80;
  //parralax effects
  $win.scroll(function () {
    var wScroll = $win.scrollTop();
    //coloring image
    $stickyMenu.css('opacity', wScroll/menuTop);
    $('.parralax-background').css({'backgroundPosition': "center -"+wScroll/2+'px'})
    $mainH1.css('border-color', 'rgba(250,250,250 ,'+(menuTop-wScroll-400)/100+')');





    if (wScroll > menuTop) {
      $stickyMenu.addClass('is-sticky')

      $mainH1.addClass('in-menu');
      $mainH1.css('transform', 'translate(-50%, 0%)');
    }  else if (wScroll > menuTop-100) {
      $mainH1.addClass('is-minimized')

      $mainH1.css('transform', 'translate(-50%, '+ wScroll/2 +'%)');

    } else if (wScroll < menuTop)  {
      $mainH1.css('transform', 'translate(-50%, '+ wScroll/2 +'%)');
      $stickyMenu.removeClass('is-sticky');
      $mainH1.removeClass('in-menu');
      $mainH1.removeClass('is-minimized')



    };


    //console.log(wScroll);

    if (wScroll > $quoteSection.offset().top-80) {
      $quoteText.addClass('is-shifted')
    }
    if (wScroll > $quoteSection.offset().top + $quoteSection.height() - 80) {
      $stickyMenu.css('box-shadow','none')
    } else {
      $stickyMenu.css('box-shadow','0 0 30px rgba(0,0,0, 0.4)')
    }


  });



});
