const cardNameChecked = document.getElementById('card-name');
const cardNumberChecked = document.getElementById('card');
const cardExpChecked = document.getElementById('card-exp');
const cardCvcChecked = document.getElementById('card-cvc');

const response = JSON.parse(localStorage.getItem('informations'));

cardNameChecked.textContent = response.name;
cardNumberChecked.textContent = response.number;
cardExpChecked.textContent = response.date;
cardCvcChecked.textContent = response.cvc;