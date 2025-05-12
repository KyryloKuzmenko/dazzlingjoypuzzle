import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.gallery-btn-next');
  const nextBtn = document.querySelector('.gallery-btn-prev');

  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,
    initialSlide: 2,

    breakpoints: {
      1200: {
        slidesPerView: 2,
        centeredSlides: true,
      },
    },

    on: {
      init() {
        toggleTall(this);
      },
      slideChangeTransitionEnd() {
        toggleTall(this);
      },
      resize() {
        toggleTall(this);
      },
    },
  });

  prevBtn.addEventListener('click', () => {
    swiper.slidePrev();
  });

  nextBtn.addEventListener('click', () => {
    swiper.slideNext();
  });

  function toggleTall(sw) {
    const desktop = window.innerWidth >= 1200;

    sw.slides.forEach(slide => {
      slide.classList.toggle(
        'tall',
        desktop && slide === sw.slides[sw.activeIndex]
      );
    });
  }
});

// import Swiper from 'swiper';
// import 'swiper/css';

// document.addEventListener('DOMContentLoaded', () => {
//   const prev = document.querySelector('.gallery-btn-prev');
//   const next = document.querySelector('.gallery-btn-next');

//   const sw = new Swiper('.gallery-slider', {
//     loop: true,
//     slidesPerView: 2,
//     centeredSlides: true,
//     spaceBetween: 24,
//     initialSlide: 2,
//     on: {
//       init() {
//         markActive(this);
//       },
//       slideChangeTransitionEnd() {
//         markActive(this);
//       },
//       resize() {
//         markActive(this);
//       },
//     },
//   });

//   prev.addEventListener('click', () => sw.slidePrev());
//   next.addEventListener('click', () => sw.slideNext());

//   function markActive(inst) {
//     inst.slides.forEach(s =>
//       s.classList.toggle('tall', s === inst.slides[inst.activeIndex])
//     );
//   }
// });
