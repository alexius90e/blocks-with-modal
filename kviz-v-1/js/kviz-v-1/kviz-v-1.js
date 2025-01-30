const quizSwiper = new Swiper('.kviz-v-1__quiz .swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  allowTouchMove: false,
  autoHeight: true,

  navigation: {
    nextEl: '.kviz-v-1__quiz-card-controls-next',
    prevEl: '.kviz-v-1__quiz-card-controls-prev',
  },
});

quizSwiper.on('reachEnd', () => {
  const quizBgElem = document.querySelector('.kviz-v-1__quiz-bg');
  if (quizBgElem) quizBgElem.classList.add('reachend');
});

const quizRadioInputs = document.querySelectorAll(
  'input[type="radio"].kviz-v-1__quiz-card-inputs-checkbox-input'
);

quizRadioInputs.forEach((radioInput) => {
  radioInput.addEventListener('input', () => {
    quizSwiper.slideNext();
  });
});
