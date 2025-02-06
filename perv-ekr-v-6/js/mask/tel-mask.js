const phoneInputClassNames = ['imask-phone-input'];

const maskOptions = {
  mask: '{+7} (000) 000-00-00[0]',
};

const phoneInputs = phoneInputClassNames
  .map((name) => document.querySelectorAll(`.${name}`))
  .reduce((acc, array) => [...acc, ...array], []);

phoneInputs.forEach((inputElement) => {
  const focusPlaceholder = '+7 (';
  const mask = IMask(inputElement, maskOptions);

  inputElement.addEventListener('focus', (event) => {
    if (event.currentTarget.value === '') {
      event.currentTarget.value = focusPlaceholder;
      mask.updateValue();
    }
  });

  inputElement.addEventListener('blur', (event) => {
    if (event.currentTarget.value === focusPlaceholder) {
      event.currentTarget.value = '';
      mask.updateValue();
    }
  });

  inputElement.addEventListener('input', (event) => {
    if (event.currentTarget.value.length === 0) {
      event.currentTarget.value = focusPlaceholder;
      mask.updateValue();
    }
  });
});
