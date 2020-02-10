document.addEventListener('DOMContentLoaded', function () {
  var eventSwiper = new Swiper('.event-slider__container', {
      slidesPerView: 1,
      spaceBetween: 24,
      preloadImages: false,
      lazy: true,
      loop: true,
      pagination: {
        el: '.event-slider__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.event-slider__next',
        prevEl: '.event-slider__prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3,
        },
      }
  });
});
