const phoneInputClassNames = ['imask-phone-input'];

const maskOptions = {
  mask: '{+7} (000) 000-00-00[0]',
};

const phoneInputs = phoneInputClassNames
  .map((name) => document.querySelectorAll(`.${name}`))
  .reduce((acc, array) => [...acc, ...array], []);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));
