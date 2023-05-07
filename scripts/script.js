const inputs = document.querySelectorAll('.inputs');
const form = document.getElementById('form');

const cardNumber = document.getElementById('card');
const cardName = document.getElementById('card-name');
const expDate = document.getElementById('card-exp');
const cvc = document.getElementById('card-cvc');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const response  = {
        'name': e.target.elements ['name'].value,
        'number': e.target.elements ['number'].value,
        'date': e.target.elements ['month'].value,
        'cvc': e.target.elements ['cvc'].value
    }

    localStorage.setItem('informations', JSON.stringify(response));

    window.location.href = '../checked.html';
})


inputs.forEach((field)=>{
    field.addEventListener('input', ()=> addCardContent(field));
    field.addEventListener('invalid', event => event.preventDefault());
})



const errorMessages = {
    name: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "Por favor, preencha um nome válido.",
        patternMismatch: "Por favor, preencha um nome válido. Insira apenas letras"
    },
    number: {
        valueMissing: "O campo não pode estar vazio.",
        tooShort: "Por favor, preencha um número válido.",
        patternMismatch: "Por favor, preencha um cartão válido. Insira apenas números",
    },
    month: {
        valueMissing: "O campo de Expirate date não pode estar vazio.",
        tooShort: "O campo de Expirate date não tem caractéres suficientes."
    },
    cvc: {
        valueMissing: 'O campo de CVC não pode estar vazio.',
        tooShort: "O campo de CVC não tem caractéres suficientes.",
        patternMismatch: "Por favor, preencha um CVC válido. Insira apenas números"
    }
}

const typesOfError = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort'
]



function addCardContent(field) {


    field.setCustomValidity('');
    let message = "";

    if (field.name == 'name') {
        cardName.textContent = field.value;
    }

    if (field.name == 'number') {
        cardNumber.textContent = field.value;
    }

    if (field.name == 'month') {
        expDate.textContent = `${field.valueAsDate.getUTCMonth() + 1}/${field.valueAsDate.getUTCFullYear()}`;
    }

    if (field.name == 'cvc') {
        cvc.textContent = field.value;
    }


    typesOfError.forEach((erro) =>{
        if (field.validity[erro]) {
            message = errorMessages[field.name][erro];
            console.log(message);  
        }    
    })

    const erro = field.parentNode.querySelector('.error');
    const inputValidity = field.checkValidity();

    if (!inputValidity) {
        erro.textContent = message;
    } else {
        erro.textContent = "";
    }

}

/* const cardNameChecked = document.getElementById('card-name-checked');
const cardNumberChecked = document.getElementById('card-checked');
const cardExpChecked = document.getElementById('card-exp-checked');
const cardCvcChecked = document.getElementById('card-cvc-checked');

const response = JSON.parse(localStorage.getItem('informations'));

cardNameChecked.textContent = response.name;
cardNumberChecked.textContent = response.number;
cardExpChecked.textContent = response.month;
cardCvcChecked.textContent = response.cvc; */
