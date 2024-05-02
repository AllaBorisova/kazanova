var swiperIdeas = new Swiper('.section-ideas-slider', {
  slidesPerView: 'auto',
  spaceBetween: 50,
  navigation: {
    nextEl: '.section-ideas-slider__next',
    prevEl: '.section-ideas-slider__prev',
  },
});

var swiperYears = new Swiper('.section-years-slider', {
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: '.section-years-slider__next',
    prevEl: '.section-years-slider__prev',
  },
});

var swiperCatalog = new Swiper('.catalog-slider', {
  slidesPerView: 'auto',
  spaceBetween: 26,
  navigation: {
    nextEl: '.catalog-slider__next',
    prevEl: '.catalog-slider__prev',
  },
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
});
var swiperCatalogImg = new Swiper('.catalog-item__img', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// var swiper = new Swiper('.section-main-thumbs__slider', {
//   loop: true,
//   spaceBetween: 11,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
//   direction: 'vertical',
//   navigation: {
//     nextEl: '.section-main-thumbs__next',
//     prevEl: '.section-main-thumbs__prev',
//   },
// } );
var swiperThumbsSlider = new Swiper('.section-main-thumbs__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  // freeMode: true,
  // watchSlidesProgress: true,
  direction: 'vertical',
  navigation: {
    nextEl: '.section-main-thumbs__next',
    prevEl: '.section-main-thumbs__prev',
  },
});
var swiper2 = new Swiper('.section-main-slider', {
  loop: true,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: swiperThumbsSlider,
  },
});

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

jQuery(document).ready(function ($) {
  //phone mask
  $('.input-tel').mask('+7 (999) 999-99-99');
  // $( '.input-code' ).mask( '9999' );

  $('.tabs').lightTabs();

  //mobile menu
  $('.hamburger').click(function () {
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('open-menu');
  });

  //search results
  $('.header-search__input').on('keyup', function () {
    $('.header-search').addClass('show-results');
    // $('.search__results').toggle();
  });

  $('.header-search__button').click(function (e) {
    if ($('.header-search').hasClass('search-active')) {
    } else {
      e.preventDefault();
      $('.header-search').addClass('search-active');
      $('.header-search__input').focus();
    }

    // $('.header').addClass('search-active');
    // $('.header .search__input').focus();
  });

  // $('.header-popup__close').click(function () {
  //   $('.hamburger').toggleClass('is-active');
  //   $('body').toggleClass('open-menu');
  // });
  $('.header-phone, .header-pin, .header-cart').click(function () {
    $(this).addClass('active');
  });
  $('body').on('click', function (e) {
    if ($(e.target).closest('.header-phone').length == 0) {
      $('.header-phone').removeClass('active');
    }
    if ($(e.target).closest('.header-pin').length == 0) {
      $('.header-pin').removeClass('active');
    }
    if ($(e.target).closest('.header-cart').length == 0) {
      $('.header-cart').removeClass('active');
    }
    if ($(e.target).closest('.header-search').length == 0) {
      $('.header-search').removeClass('search-active');
      $('.header-search').removeClass('show-results');
    }

    // $('.section-ideas__slider').slick({
    //   dots: false,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 4,
    //   centerMode: false,
    //   variableWidth: true,
    // });
  });
  // $('.input-file input[type=file]').on('change', function () {
  //   let file = this.files[0];
  //   $(this).parent().find('.input-file__result').addClass('active');
  //   $(this).parent().find('.input-file__name').html(file.name);
  //   $(this).parent().find('.input-file__load-img').addClass('hide');
  // });
  // function removeFilesItem(target) {
  //   let name = $(target).prev().text();
  //   let input = $(target).closest('.input-file-row').find('input[type=file]');
  //   $(target).closest('.input-file-list-item').remove();
  //   for (let i = 0; i < dt.items.length; i++) {
  //     if (name === dt.items[i].getAsFile().name) {
  //       dt.items.remove(i);
  //     }
  //   }
  //   input[0].files = dt.files;
  // }
});
