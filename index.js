const transitionElement = document.querySelector('p');
const message = document.querySelector('.message');

transitionElement.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

// Create variables for each important element in HTML
const button = document.querySelector('button');
const p = document.querySelector('p');
const body = document.querySelector('body');
const bodyBody = document.querySelector('div');

button.addEventListener('click', function() {
    message.textContent = 'hi';
    p.classList.add('textAlter');
    body.classList.add('changeToneBody');
    bodyBody.classList.add('friendAlter');
});

