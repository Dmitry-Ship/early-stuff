"use strict";
$(function () {

  const $win = $(window),
      $logo = $('.logo'),
      $mainSpan = $('.logo span'),
      $mainP = $('.logo p'),
      $stickyMenu = $('.sticky'),
      $stickyMenuTop = $('.about').offset().top-80;


  $win.scroll( () => {
    const wScroll = $win.scrollTop();
    $('.parralax-background').css({'backgroundPosition': "center -"+wScroll/2+'px'});
    
    $stickyMenu.css('opacity', wScroll/($stickyMenuTop-80));

    $mainP.css('opacity',($stickyMenuTop-wScroll-400)/100);



    if (wScroll >= $stickyMenuTop-80) {
      $logo.addClass('is-shifted');
    } else {
      $logo.removeClass('is-shifted');
    }



    if (wScroll>=$stickyMenuTop) {
      $stickyMenu.addClass('is-sticky');
      $logo.addClass('is-logo');
      $logo.css('transform', 'translate(-50%, 0%)');
      // setTimeout(function () {
      //   $mainSpan.css('display', 'none')
      // },700)
    } else {
      $stickyMenu.removeClass('is-sticky')
      $logo.removeClass('is-logo');
      $logo.css('transform', 'translate(-50%, '+ wScroll/2 +'%)')
    }

  })




})
