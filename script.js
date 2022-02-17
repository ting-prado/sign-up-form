const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const pass = document.querySelector('#password');
const cpass = document.querySelector('#cpassword');
const form = document.querySelector('form');

const fnameError = document.querySelector('#fname + span');
const lnameError = document.querySelector('#lname + span');
const emailError = document.querySelector('#email + span');
const numberError = document.querySelector('#number + span');
const passError = document.querySelector('#password + span');
const cpassError = document.querySelector('#cpassword + span');

form.noValidate = true;

fname.addEventListener('focusout', e => {
  if(fname.value == '') {
    fnameError.textContent = 'Please enter your first name'
    addInvalid(fname);
  }
  else if((fname.validity.valid) && (fname.value != '')) {
    fnameError.textContent = '';
    addValid(fname);
  }
});

lname.addEventListener('focusout', e => {
  if(lname.value == '') {
    lnameError.textContent = 'Please enter your last name'
    addInvalid(lname);
  }
  else if((lname.validity.valid) && (lname.value != '')) {
    lnameError.textContent = '';
    addValid(lname);
  }
});

email.addEventListener('focusout', e => {
  if((email.validity.valid) && (email.value !== '')) {
    emailError.textContent = '';
    addValid(email);
  }
  else if(email.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email'
    addInvalid(email);
  }
  else if(email.value == '') {
    emailError.textContent = '';
    noEffect(email);
  }
});

number.addEventListener('focusout', e => {
  if((number.validity.valid) && (number.value !== '')) {
    numberError.textContent = '';
    addValid(number);
  }
  else if(number.validity.patternMismatch) {
    numberError.textContent = 'Please enter a valid number format';
    addInvalid(number);
  } 
  else if(number.value == '') {
    numberError.textContent = '';
   noEffect(number);
  }
});

pass.addEventListener('focusout', e => {
  if(pass.validity.tooShort) {
    passError.textContent = 'Password too short'
    addInvalid(pass);
  }
  else if((pass.validity.valid) && (pass.value != '')) {
    passError.textContent = '';
    addValid(pass);
  }
  else if(pass.value == '') {
    passError.textContent = 'Please enter a password';
    addInvalid(pass);
  }
});

cpass.addEventListener('focusout', e => {
  if((cpass.value != pass.value) && (pass.value != '')) {
    cpassError.textContent = 'Password does not match';
    addInvalid(cpass);
  }
  else if((cpass.value == pass.value) && (pass.value !='') && (pass.validity.valid)) {
    cpassError.textContent = '';
    addValid(cpass);
  }
  else if(cpass.value == '') {
    cpassError.textContent = '';
    noEffect(cpass);
  }
});

form.addEventListener('submit', e => {
  if((fname.value == '') || 
     (lname.value == '') ||
     (email.value == '') ||
     (number.value == '') ||
     (pass.value == '') ||
     (cpass.value == '')) {
      e.preventDefault();
      alert('Please fill out the missing fields.');
    }
  else if (!form.checkValidity()) {
    e.preventDefault();
    alert('Please make sure the entered values are correct.');
  }
});

function addInvalid(input) {
  input.classList.add('invalid');
  input.classList.remove('valid');
}

function addValid(input) {
  input.classList.remove('invalid');
  input.classList.add('valid');
}

function noEffect(input) {
  input.classList.remove('invalid');
  input.classList.remove('valid');
}