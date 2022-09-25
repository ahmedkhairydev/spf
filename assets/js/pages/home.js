(function ($) {
  "use strict";

  /*---------------------------
      Hero Slider Activation
    -----------------------------------*/
  const sliderOne = new Swiper(".sliderone", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /* ----------------------------
      Tilt Animation 
  -------------------------------*/
  $('.js-tilt').tilt({
    base: window,
    reset: true,
    scale: 1.02,
    reverse: true,
    max: 15,
    perspective: 3e3,
    speed: 4e3
  });

  /* ----------------------------
  Odometer Activation 
  -------------------------------*/
  if ($('.odometer').length) {
    var elemOffset = $('.odometer').offset().top;
    var winHeight = $(window).height();
    if (elemOffset < winHeight) {
      $('.odometer').each(function () {
        $(this).html($(this).data('count-to'));
      });
    }
    $(window).on('scroll', function () {
      var elemOffset = $('.odometer').offset().top;
      function winScrollPosition() {
        var scrollPos = $(window).scrollTop(),
          winHeight = $(window).height();
        var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
        return scrollPosition;
      }
      if (elemOffset < winScrollPosition()) {
        $('.odometer').each(function () {
          $(this).html($(this).data('count-to'));
        });
      }
    });
  };

  /* ----------------------------
  Isotope Activation 
  -------------------------------*/
  $('.grid').imagesLoaded(function () {
    // filter items on button click
    $('.portfolio-menu-active').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid2.isotope({ filter: filterValue });
    });
    // init Isotope
    var $grid2 = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      layoutMode: 'masonry',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    });
  });

  $('.isotope-btn-add-active button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });

  /*---------------------------
    Testimonial Activation
  -----------------------------------*/
  const testimonialOne = new Swiper(".testimonialone", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: false,
    allowTouchMove: true,

    navigation: {
      nextEl: '.testimonialone .swiper-btn-next',
      prevEl: '.testimonialone .swiper-btn-prev',
    },
  });

  /*---------------------------
    Testimonial Two Activation
  -----------------------------------*/
  const testimonialTwo = new Swiper(".testimonialtwo", {
    slidesPerView: 3,
    loop: true,
    pagination: false,
    allowTouchMove: true,
    navigation: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });

  /*---------------------------
    Brand Slider Activation
  -----------------------------------*/
  const brandTwo = new Swiper(".brand-slider-two", {
    loop: true,
    speed: 800,
    autoplay: true,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }
  });

  /*---------------------------
    Portfolio Carousel Activation
  -----------------------------------*/
  const portfolio = new Swiper(".portfolio-carousel", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: false,
    autoplay: true,
    navigation: {
      nextEl: '.portfolio-carousel-wrapper .swiper-btn-next',
      prevEl: '.portfolio-carousel-wrapper .swiper-btn-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 3
      }
    }
  });

  /*---------------------------
    Services
  -----------------------------------*/
  const services = ['campaign', 'gandolla', 'gate', 'giveaways', 'magazine', 'printings'];
  let servicesHTML = '';

  services.forEach(service => {
    servicesHTML += `
      <div class="col-sm-6 col-lg-4 mb-30 wow fadeIn" data-wow-duration="1.2s" data-wow-delay=".1s">
        <div class="service-two-single">
          <div class="service-two-single-head">
            <img src="assets/images/services/${service}.svg" loading="lazy" alt="icon" style="width: 75px; height: 75px">
            <h6 class="title text-capitalize">${service}</h6>
          </div>
        </div>
      </div>
    `;
  });

  $('#services').append(servicesHTML);

  /*---------------------------
    Brands
  -----------------------------------*/
  const brands = ['Johnson&Johnson', 'loreoal-paris', 'bosch', 'danone', 'seb', 'gsk', 'LG', 'sanofi', 'aldora', 'health', 'heinz', 'savola'];
  let brandsHTML = '';

  brands.forEach(brand => {
    brandsHTML += `
      <div class="swiper-slide">
        <a class="brand-after" href="javascript:"><img src="assets/images/brand/${brand}.svg" loading="lazy" alt="${brand} Brand-Image"></a>
        <a class="brand-before" href="javascript:"><img src="assets/images/brand/${brand}.svg" loading="lazy" alt="${brand} Brand-Image"></a>
      </div>
    `;
  });

  $('#brandsTwo').append(brandsHTML);

  /*---------------------------
    Portfolio
  -----------------------------------*/
  const portfolioImages = [
    {
      imageName: 'gate_1.jpg',
      serviceCat: 'gate',
      type: 'odd'
    },
    {
      imageName: 'dangler_1.png',
      serviceCat: 'dangler',
      type: 'odd'
    },
    {
      imageName: 'campain_1.jpg',
      serviceCat: 'campain',
      type: 'odd'
    },
    {
      imageName: 'floor-display_8.jpg',
      serviceCat: 'floor-display',
      type: 'odd'
    },
    {
      imageName: 'gate_2.jpg',
      serviceCat: 'gate',
      type: 'odd'
    },
    {
      imageName: 'counter-top_7.png',
      serviceCat: 'counter-top',
      type: 'odd'
    },
  ];
  let portfolioHTML = '';

  portfolioImages.forEach(portfolioImage => {
    portfolioHTML += `
      <div class="swiper-slide custom-height">
        <div class="single-portfolio-carousel single-portfolio">
          <a class="thumbnail" href="portfolio.html#portfolioWrapper">
            <img src="assets/images/products/${portfolioImage.imageName}" loading="lazy" alt="Portfolio Image">
          </a>
          <div class="content">
            <span class="subtitle text-capitalize">${portfolioImage.serviceCat.split('-').join(' ')}</span>
          </div>
        </div>
      </div>
    `;
  });

  $('#portfolioSwiper').append(portfolioHTML);
})(jQuery);
