const phoneInputClassNames = ['imask-phone-input'];

const maskOptions = {
  mask: '{+7} (000) 000-00-00[0]',
};

const phoneInputs = phoneInputClassNames
  .map((name) => document.querySelectorAll(`.${name}`))
  .reduce((acc, array) => [...acc, ...array], []);

phoneInputs.forEach((inputElement) => {
  const basePlaceholder = inputElement.getAttribute('placeholder');
  const focusPlaceholder = '+7 (';

  IMask(inputElement, maskOptions);

  inputElement.addEventListener('focus', (event) => {
    event.currentTarget.setAttribute('placeholder', focusPlaceholder);
  });

  inputElement.addEventListener('blur', (event) => {
    event.currentTarget.setAttribute('placeholder', basePlaceholder);
  });
});
