const formSubmit = document.querySelector('form');
const errorMessage = document.querySelector('.error-message');
const emailInput = document.querySelector('.input');

const validateEmail = email => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isErrorTrue = (element1, element2, className) => {
  if (!validateEmail(element1.value)) {
    element1.classList.add(className);
    element1.placeholder = 'example@email/com';
    element2.classList.add(className);
  } else {
    element1.classList.remove(className);
    element2.classList.remove(className);
  }
};

formSubmit.addEventListener('submit', e => {
  e.preventDefault();
  isErrorTrue(emailInput, errorMessage, 'show');
});
