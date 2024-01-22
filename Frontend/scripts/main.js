new Swiper(".site-banners-swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
});

new Swiper(".categories-swiper", {
  slidesPerView: 3,
  freeMode: true,

  breakpoints: {
    480: {
      slidesPerView: 4,
    },
    650: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
    },
    1536: {
      slidesPerView: 7,
    },
  },
});
