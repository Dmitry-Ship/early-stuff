$(function () {
  function smooth(dur) {
    $('a[href^="#"]').click(function (event) {
      var target = $($(this).attr('href'))
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, dur)
      }
    })
  }
  smooth(500)
})
