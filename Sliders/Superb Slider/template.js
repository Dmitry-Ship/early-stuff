"use strict";
$(function () {
  // $('button').click(function () {
  //   var $step = $(this).parents('.modal-body'),
  //       stepIndex = $step.index(),
  //       $pag = $('.modal-header span').eq(stepIndex);
  //   console.log('hello');
  //
  //   if (stepIndex === 0 || stepIndex === 1) {
  //     step1($step, $pag);
  //   } //else {
  //     //step3($step, $pag);
  //   //};
  //
  //
  //
  //   function step1($step, $pag) {
  //     setTimeout(function () {
  //       $pag.removeClass('is-active').next().addClass('is-active')
  //     }, 600)
  //   }
  // })


  // $('.right').click(function () {
  //   var $currentImage = $('.is-showing');
  //   $currentImage.removeClass('is-showing').next().addClass('is-showing')
  //   console.log($currentImage.index());
  //   if ($currentImage.index() < 0) {
  //     $('img').first().addClass('is-showing')
  //   }
  // })
  // $('.left').click(function () {
  //   var $currentImage = $('.is-showing');
  //   $currentImage.removeClass('is-showing').prev().addClass('is-showing')
  //   if ($currentImage.index() < 0) {
  //     $('img').first().addClass('is-showing')
  //   }
  // })




  // function slider() {
  //   var $currentImage = $('.is-showing');
  //   if ($(this).attr('class') === 'button right') {
  //     $currentImage.removeClass('is-showing').next().addClass('is-showing');
  //   } else {
  //     $currentImage.removeClass('is-showing').prev().addClass('is-showing');
  //   }
  //   if ($currentImage.index() === -1) {
  //     $('img').first().addClass('is-showing')
  //   }
  // }


  $('.button').click(slider);
  function slider() {
    var $currentImage = $('.is-showing');
    var direction = $(this).attr('class').split(' ')[1];

    $currentImage.removeClass('is-showing')
    if (!$currentImage[direction]().length) {
      $('img').first().addClass('is-showing')
    } else {
      $currentImage[direction]().addClass('is-showing');
    }



  }





})
