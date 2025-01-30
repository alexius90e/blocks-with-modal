const thanksModal = document.querySelector('.okno-spasibo-v1');
const formsWithThanksModal = document.querySelectorAll('.form-with-okno-spasibo');

if (thanksModal) {
  thanksModal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('okno-spasibo-v1__close');

    if (isClose || isLayout) closeThanksModal(thanksModal);
  });
}

formsWithThanksModal.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    openThanksModal(thanksModal);
  });
});

function openThanksModal(modal) {
  if (modal) modal.classList.add('active');
}

function closeThanksModal(modal) {
  if (modal) modal.classList.remove('active');
}
