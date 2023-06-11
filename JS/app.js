// Using for the submission
const formEmail = document.getElementById('form-part');
const formSucceed = document.getElementById('success-part');

// Input
const emailInput = document.getElementById('email');
const dismissBtn = document.getElementById('dismiss');

// Output
const emailOutput = document.getElementById('email-output');
const errorMsg = document.getElementById('error-statement');

formEmail.addEventListener('submit', (e) => {
  e.preventDefault();

  validateEmail();
});

const setError = (element, mySpan) => {
  element.classList.remove('email-input');
  element.classList.add('error-input');
  mySpan.textContent = 'Valid email required';
};

const removeError = (element, mySpan) => {
  element.classList.add('email-input');
  element.classList.remove('error-input');
  mySpan.textContent = '';
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Redirect to the success part and display the email of the user
const setSuccess = () => {
  formEmail.style.display = 'none';
  formSucceed.style.display = 'grid';
  emailOutput.textContent = emailInput.value;
};

const validateEmail = () => {
  const emailValue = emailInput.value.trim();

  if ((emailValue === '') || (emailValue === null)) {
    emailInput.placeholder = 'ash#loremcompany.com';
    setError(emailInput, errorMsg);
  } else if (!isValidEmail(emailValue))  {
    setError(emailInput, errorMsg);
  } else {
    removeError(emailInput, errorMsg);
    setSuccess();
  }
};

// Redirecting back to the email sign up
dismissBtn.addEventListener('click', () => {
  formEmail.style.display = 'grid';
  formSucceed.style.display = 'none';
});