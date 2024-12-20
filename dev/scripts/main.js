let swiperIdeas = new Swiper('.section-ideas-slider', {
  slidesPerView: 'auto',
  spaceBetween: 50,
  navigation: {
    nextEl: '.section-ideas-slider__next',
    prevEl: '.section-ideas-slider__prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 16,
    },
    // desktop >= 991
    991: {},
  },
});

let swiperYears = new Swiper('.section-years-slider', {
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: '.section-years-slider__next',
    prevEl: '.section-years-slider__prev',
  },
  breakpoints: {
    // mobile + tablet - 320-990
    320: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    // desktop >= 991
    991: {
      slidesPerView: 2,
    },
  },
});

let swiperCatalog = new Swiper('.catalog-slider', {
  slidesPerView: 'auto',
  spaceBetween: 26,
  navigation: {
    nextEl: '.catalog-slider__next',
    prevEl: '.catalog-slider__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // noSwiping: true,
  // noSwipingClass: 'swiper-slide',
});

let swiperCatalogImg = new Swiper('.catalog-item__img', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let swiperThumbsSlider = new Swiper('.section-main-thumbs__slider', {
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
  breakpoints: {
    // mobile + tablet - 320-990
    320: {
      slidesPerView: 'auto',
      direction: 'horizontal',
      spaceBetween: 8,
    },
    // desktop >= 991
    991: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3,
    },
  },
});

let swiperCatalogItemPopup = new Swiper('.card-popup-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.card-popup-slider__next',
    prevEl: '.card-popup-slider__prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // noSwiping: true,
  // noSwipingClass: 'swiper-slide',
});

let swiper2 = new Swiper('.section-main-slider', {
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

//collection slider in product card
let swiperCollectionCard = new Swiper('.collections-slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.collections-slider__next',
    prevEl: '.collections-slider__prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    // desktop >= 767
    767: {},
  },
});

// $('.product-card-collection-slider').slick({
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   dots: false,
//   arrows: true,
//   centerMode: false,
//   focusOnSelect: true,
//   prevArrow: '<button class="slide-arrow prev-arrow"></button>',
//   nextArrow: '<button class="slide-arrow next-arrow"></button>',
// });

Fancybox.bind('[data-fancybox]', [{
  defaultType: 'inline',
  dragToClose: false,
  
}]);

jQuery(document).ready(function ($) {
  //phone mask
  $('.input-tel').mask('+7 999 999-99-99');
  // $( '.input-code' ).mask( '9999' );

  $( '.form-info-delivery__name' ).click( function () {
    $( this ).parent().toggleClass( 'open-info' );
  })

  $('.catalog-item__fast-view').click( function(){
    console.log( 'open popup' );
    Fancybox.show( [ { src: "#card-popup", type: "inline" } ] );
    swiperCatalogItemPopup.update();
  })

  //форма авторизации первый шаг
  $('.button-get-code').click(function (e) {
    e.preventDefault();

    if ($('.login-form__step1 .input-tel').val() === '') {
      $('.login-form__step1 .input-tel').addClass('form__block-error');
    } else {
      $('.login-form__step1 .input-tel').removeClass('form__block-error');
      $('.login-form__step1').addClass('hide');
      $('.login-form__step2').addClass('show');
      //запускаем таймер
      run();
    }
  });

  function run() {
    $('.form__timer-counter').show();
    $('.form__timer-text').removeClass('show-link');
    let i = 120;
    onTimer();
    function onTimer() {
      $('.form__timer-counter span').text(i);
      i--;
      if (i < 0) {
        $('.form__timer-text').addClass('show-link');
        $('.form__timer-counter').hide();
      } else {
        setTimeout(onTimer, 1000);
      }
    }
  }

  //форма авторизации второй шаг
  $('.button-check-code').click(function (e) {
    e.preventDefault();
    if ($('.login-form__step2 .input-code').val() === '') {
      $('.login-form__step2 .input-code').addClass('form__block-error');
    } else {
      alert('Welcome!');
      $('.login-form__step2 .input-code').removeClass('form__block-error');
    }
  });

  //повторный звонок
  $('.form__timer-text').click(function (e) {
    e.preventDefault();
    //запускаем таймер
    run();
  });

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

  //show search
  $('.header-search__button').click(function (e) {
    if ($('.header-search').hasClass('search-active')) {
    } else {
      e.preventDefault();
      $('.header-search').addClass('search-active');
      $('.header-search__input').focus();
    }
  });

  // $('.header-popup__close').click(function () {
  //   $('.hamburger').toggleClass('is-active');
  //   $('body').toggleClass('open-menu');
  // });
  $(document).on("mouseenter", ".header-cart, .header-phone, .header-pin", function (e) {
    if(!$(this).hasClass("active")){
    $(this).addClass("active");
  }
});

$(document).on("mouseleave", ".header-cart, .header-phone, .header-pin", function (e) {
      console.log(e.target, e.relatedTarget);
    if($(this).hasClass("active")){
    $(this).removeClass("active");
  }
});

  // $('.header-phone, .header-pin, .header-cart').click(function () {
  //   $(this).addClass('active');
  // });

  // $('body').on('click', function (e) {
  //   if ($(e.target).closest('.header-phone').length == 0) {
  //     $('.header-phone').removeClass('active');
  //   }
  //   if ($(e.target).closest('.header-pin').length == 0) {
  //     $('.header-pin').removeClass('active');
  //   }
  //   if ($(e.target).closest('.header-cart').length == 0) {
  //     $('.header-cart').removeClass('active');
  //   }
  //   if ($(e.target).closest('.header-search').length == 0) {
  //     $('.header-search').removeClass('search-active');
  //     $('.header-search').removeClass('show-results');
  //   }
  // });

  $('.footer-menu__caption').click(function () {
    $(this).parent().toggleClass('open-list');
  });
  $('.header-popup__title').click(function () {
    $(this).parent().toggleClass('open-list');
  });
  $('.catalog-filtr__name').click(function () {
    const value = $(this).parent().find('.catalog-filtr__value');
    if (value.hasClass('show-value')) {
      value.toggleClass('show-value');
      $(this).parent().css('width', 'auto');
    } else {
      value.toggleClass('show-value');
      const width =
        value.outerWidth() > $(this).outerWidth()
          ? value.outerWidth()
          : $(this).outerWidth();
      $(this).parent().css('width', width);
    }
  });
  $('.personal__menu_mobile ').click(function () {
    $(this).next().toggleClass('show-menu');
  });
  $('.catalog-filtr__mobile-title').click(function () {
    $('.catalog-filtr__mobile-block').toggleClass('show-filter');
  });

  $('.product-card__toggle-title').click(function () {
    $(this).parent().toggleClass('show-toggle');
  });

  $('.counter__plus').click(function (e) {
    fieldName = $(this).parent().find('.counter__quantity');
    let currentVal = Number(fieldName.val());
    if (!isNaN(currentVal)) {
      fieldName.val(currentVal + 1);
    } else {
      fieldName.val(0);
    }
  });

  $('.counter__minus').click(function (e) {
    fieldName = $(this).parent().find('.counter__quantity');
    let currentVal = Number(fieldName.val());
    if (!isNaN(currentVal) && currentVal > 0) {
      fieldName.val(currentVal - 1);
    } else {
      fieldName.val(0);
    }
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
  //card slider
  $('.product-card__slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    prevArrow:
      '<button class="product-card__slider-for__prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" transform="matrix(1 0 0 -1 0 40)" fill="white" /><path d="M12.767 20.029C12.4546 20.3415 12.4546 20.848 12.767 21.1604L17.8582 26.2516C18.1706 26.564 18.6771 26.564 18.9895 26.2516C19.302 25.9392 19.302 25.4326 18.9895 25.1202L14.4641 20.5947L18.9895 16.0692C19.302 15.7568 19.302 15.2503 18.9895 14.9379C18.6771 14.6255 18.1706 14.6255 17.8582 14.9379L12.767 20.029ZM26.666 19.7947H13.3327V21.3947H26.666V19.7947Z" fill="#1F1F1F" /></svg></button>',
    nextArrow:
      '<button class="product-card__slider-for__next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" transform="matrix(1 0 0 -1 0 40)" fill="white" /><path d="M27.233 19.4343C27.5454 19.7467 27.5454 20.2533 27.233 20.5657L22.1418 25.6569C21.8294 25.9693 21.3229 25.9693 21.0105 25.6569C20.698 25.3444 20.698 24.8379 21.0105 24.5255L25.5359 20L21.0105 15.4745C20.698 15.1621 20.698 14.6556 21.0105 14.3431C21.3229 14.0307 21.8294 14.0307 22.1418 14.3431L27.233 19.4343ZM13.334 19.2H26.6673V20.8H13.334V19.2Z" fill="#1F1F1F" /></svg></button>',
    asNavFor: '.product-card__slider-nav',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: false,
          dots: true,
        },
      },
    ],
  });
  $('.product-card__slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.product-card__slider-for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  });
  /* ripple effect for buttons */
  $.ripple('.button, .catalog-item__fast-view', {
    debug: false, // Turn Ripple.js logging on/off
    on: 'mouseenter', // The event to trigger a ripple effect

    opacity: 0.4, // The opacity of the ripple
    color: 'auto', // Set the background color. If set to "auto", it will use the text color
    multi: true, // Allow multiple ripples per element

    duration: 0.6, // The duration of the ripple

    easing: 'linear', // The CSS3 easing function of the ripple
  });
  /* ripple end */
});

(function ($, document, Math) {
  $.ripple = function (selector, options) {
    var self = this;

    var _log = (self.log = function () {
      if (self.defaults.debug && console && console.log) {
        console.log.apply(console, arguments);
      }
    });

    self.selector = selector;
    self.defaults = {
      debug: false,
      on: 'mousedown',

      opacity: 0.4,
      color: 'auto',
      multi: false,

      duration: 0.7,
      rate: function (pxPerSecond) {
        return pxPerSecond;
      },

      easing: 'linear',
    };

    self.defaults = $.extend({}, self.defaults, options);

    var Trigger = function (e) {
      var $this = $(this);
      var $ripple;
      var settings;

      $this.addClass('has-ripple');

      // This instances settings
      settings = $.extend({}, self.defaults, $this.data());

      // Create the ripple element
      if (
        settings.multi ||
        (!settings.multi && $this.find('.ripple').length === 0)
      ) {
        $ripple = $('<span></span>').addClass('ripple');
        $ripple.appendTo($this);

        _log('Create: Ripple');

        // Set ripple size
        if (!$ripple.height() && !$ripple.width()) {
          var size = Math.max($this.outerWidth(), $this.outerHeight());
          $ripple.css({
            height: size,
            width: size,
          });
          _log('Set: Ripple size');
        }

        // Give the user the ability to change the rate of the animation
        // based on element width
        if (settings.rate && typeof settings.rate == 'function') {
          // rate = pixels per second
          var rate = Math.round($ripple.width() / settings.duration);

          // new amount of pixels per second
          var filteredRate = settings.rate(rate);

          // Determine the new duration for the animation
          var newDuration = $ripple.width() / filteredRate;

          // Set the new duration if it has not changed
          if (settings.duration.toFixed(2) !== newDuration.toFixed(2)) {
            _log('Update: Ripple Duration', {
              from: settings.duration,
              to: newDuration,
            });
            settings.duration = newDuration;
          }
        }

        // Set the color and opacity
        var color =
          settings.color == 'auto' ? $this.css('color') : settings.color;
        var css = {
          animationDuration: settings.duration.toString() + 's',
          animationTimingFunction: settings.easing,
          background: color,
          opacity: settings.opacity,
        };

        _log('Set: Ripple CSS', css);
        $ripple.css(css);
      }

      // Ensure we always have the ripple element
      if (!settings.multi) {
        _log('Set: Ripple Element');
        $ripple = $this.find('.ripple');
      }

      // Kill animation
      _log('Destroy: Ripple Animation');
      $ripple.removeClass('ripple-animate');

      // Retrieve coordinates
      var x = e.pageX - $this.offset().left - $ripple.width() / 2;
      var y = e.pageY - $this.offset().top - $ripple.height() / 2;

      /**
       * We want to delete the ripple elements if we allow multiple so we dont sacrifice any page
       * performance. We don't do this on single ripples because once it has rendered, we only
       * need to trigger paints thereafter.
       */
      if (settings.multi) {
        _log('Set: Ripple animationend event');
        $ripple.one(
          'animationend webkitAnimationEnd oanimationend MSAnimationEnd',
          function () {
            _log('Note: Ripple animation ended');
            _log('Destroy: Ripple');
            $(this).remove();
          }
        );
      }

      // Set position and animate
      _log('Set: Ripple location');
      _log('Set: Ripple animation');
      $ripple
        .css({
          top: y + 'px',
          left: x + 'px',
        })
        .addClass('ripple-animate');
    };

    $(document).on(self.defaults.on, self.selector, Trigger);
  };
})(jQuery, document, Math);
