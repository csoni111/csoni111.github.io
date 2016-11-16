---
layout: null
---
$(document).ready(function () {
//   $('a.blog-button').click(function (e) {
//     currentWidth = $('.panel-cover').width()
//     $('.panel-cover').css('max-width', currentWidth)
//     if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
//       $('.panel-cover').removeClass('panel-cover--collapsed')
//       $('.panel-cover').css('max-width', 'none')
//       $('.panel-cover').animate({'max-width': '100%', 'width': '100%'}, 400, swing = 'swing', function () {})
//       return
//     } 
//     $('.panel-cover').addClass('panel-cover--collapsed')
//     if (currentWidth < 960) {
//       $('.content-wrapper').addClass('animated slideInRight')
//     } else {
//       $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
//     }
//   })

//   if (window.location.hash && window.location.hash == '#blog') {
//     $('.panel-cover').addClass('panel-cover--collapsed')
//   }

  // if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
  //   $('.panel-cover').addClass('panel-cover--collapsed')
  // }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
