$(function () {

  //configuration
  var width = 900;
  var animationSpeed = 1000;
  var pause = 2000;
  var currentSlide = 1;
  var interval;
  //cache DOM
  var $slider = $('.slider')
  var $slideContainer = $slider.find('.slides')
  var $slides = $slideContainer.find('.slide')


  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
  startSlider();
  //functions
  function startSlider() {
    interval = setInterval(function () {
        $slideContainer.animate({'margin-left':'-='+width}, animationSpeed, function () {
          currentSlide++;
          if (currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css('margin-left',0);
          }
        });
      }, pause);
  };
  function pauseSlider() {
    clearInterval(interval);
  }





});
