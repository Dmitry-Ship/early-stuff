$(function () {
  var slides = $('.slideShow>li');
  var slideCount = 0;
  var totalSlides = slides.length;
  var slideCashe = [];

  (function preloader() {
    if (slideCount < totalSlides) {
      slideCashe[slideCount] = new Image();
      slideCashe[slideCount].src = slides.eq(slideCount).find('img').attr('src');
      slideCashe[slideCount].onload = function () {
        slideCount++;
        preloader();
      };
    } else {
        slideCount = 0;
        slideShow();
      }
  })();
  //
  // function slideShow() {
  //   slides.eq(slideCount).fadeIn(1000).delay(2000).fadeOut(1000, function () {
  //     slideCount < totalSlides - 1 ? slideCount++ : slideCount = 0;
  //     slideShow();
  //   })
  //
  // }
  function slideShow() {
    for (slideCount=0; slideCount <= totalSlides; slideCount++) {
      if (slideCount === 5) {
        slideCount=0
      } else {
        slides.eq(slideCount).fadeIn(1000).delay((slideCount+1)*2000).fadeOut(1000);
        console.log('Hello!');
      }

    }
  }



  // var list = ['yellow', 'green', 'black', 'orange']
  // for (var i = 0; i <= list.length; i++) {
  //   i === list.length ? i = 0 : document.write(list[i])

    // if (i === list.length) {
    //   i = 0
    // } else {
    //   console.log(list[i]);
    // }



});
