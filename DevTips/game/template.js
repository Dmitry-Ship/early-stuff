"use strict";
$(function () {
  $('button').click(function () {
    var $step = $(this).parents('.modal-body'),
        $pag = $('.modal-header span.is-active');
    $pag.removeClass('is-active').next().addClass('is-active')



    $step.addClass('animate-out');
    setTimeout(function () {
      $step.removeClass('is-showing animate-out').next().addClass('animate-in')
    },600)


    setTimeout(function () {
      $step.next().removeClass('animate-in').addClass('is-showing')
    },900)



  })






})
