const formPage = document.querySelector('.form-container');
const completeState = document.querySelector('.complete-state')
const form = document.querySelector('.form');
const formName = document.querySelector('#cardholderName');
const  formCardNumber = document.querySelector("#cardNumber");
const  formMM = document.querySelector("#mm");
const formYY = document.querySelector("#yy");
const formCvc = document.querySelector("#cvc");
const formSubmitBtn = document.querySelector("#submitBtn"); 
const formContinueBtn = document.querySelector("#continueBtn")

updateCard();

// Error Message Function
function errorMessage(input, message) {
    const inputParentDiv = input.parentElement;
    const small = inputParentDiv.querySelector('small');
    small.innerText = message;
}

// Event Listeners
function updateCard() {
    formName.addEventListener('keyup', (e)=> {
        const cardFrontName = document.querySelector('.card-front-name');
        cardFrontName.innerHTML = e.target.value;
    })

    formCardNumber.addEventListener('keyup', (e) => {
        const cardNumber = document.querySelector('.card-number');
        cardNumber.innerHTML = format(e.target.value)
    })

    formMM.addEventListener('keyup', (e) => {
        const cardFrontMM = document.querySelector('.card-front-exp span:nth-child(1)');
        cardFrontMM.innerHTML = e.target.value;
    })

    formYY.addEventListener('keyup', (e) => {
        const cardFrontYY = document.querySelector('.card-front-exp span:nth-child(2)');
        cardFrontYY.innerHTML = e.target.value;
    })

    formCvc.addEventListener('keyup', (e) => {
        const cardBackCvc = document.querySelector('.card-back-cvc');
        cardBackCvc.innerHTML = e.target.value;
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    validateInputs();
})

function validateInputs() {
    if(formName.value === '') {
        errorMessage(formName, 'Name is required');
        formName.style.border = '2px solid var(--red)';
        ;
    } 

    if(formCardNumber.value === '') {
        errorMessage(formCardNumber, 'Cant be blank');
        formCardNumber.style.border = '2px solid var(--red)';
    } else if (isNaN(formCardNumber.value)) {
        errorMessage(formCardNumber, 'Wrong format, numbers only')
    }
    
    if(formMM.value === '') {
        errorMessage(formMM,'Cant be blank')
        formMM.style.border = '2px solid var(--red)';
    } else if (isNaN(formMM.value)) {
        errorMessage(formMM, 'Wrong format, numbers only')
    }

    if(formYY.value === '') {
        errorMessage(formYY, 'Cant be blank')
        formYY.style.border = '2px solid var(--red)';
    } else if (isNaN(formYY.value)) {
        errorMessage(formYY, 'Wrong format, numbers only')
    }

    if(formCvc.value === '') {
        errorMessage(formCvc, 'Cant be blank')
        formCvc.style.border = '2px solid var(--red)';
    } else if (isNaN(formCvc.value)) {
        errorMessage(formCvc, 'Wrong format, numbers only')
    }

    if(formName.value !== '' && formCardNumber.value !== '' && formCardNumber.value !== 16 && formMM.value !== '' && formYY.value !== '' && formCvc.value !== '') {
        completeState.classList.remove('hide');
        formPage.classList.add('hide');
    }
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}



