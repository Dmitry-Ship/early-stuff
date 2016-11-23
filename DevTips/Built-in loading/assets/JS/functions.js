"use strict";
$(function () {
  $('.items').masonry({
    itemSelector: '.item',
    columnWidth: 185,
    gutter: 10
  });


  $('.title').on('click', function(){
    $('.item').each(function (i) {
      setTimeout(function () {
        $('.item').eq(i).addClass('is-changed')
      }, 300 * i)
    })
  })



})
