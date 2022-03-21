// Hamburger menu button animatie
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// Hamburger menu + fadeout
  const uitKlapMenu = () => {
    let element = document.getElementById("klapmenu");
    element.classList.toggle("klapmenu-expand");
  } 

  const fadeOut = () => {
    let element = document.getElementById("main");
    element.classList.toggle("fadeout");
  }

  const circleMenu = () => {
    let element = document.getElementById("circlemenu");
    element.classList.toggle("circlemenu-expand");
  }


// Formulier validatie
const naamEl = document.querySelector('#naam');
const emailadresEl = document.querySelector('#emailadres');
const form = document.querySelector('#feedbackformulier');

const checkNaam = () => {
    let valid = false;
    const min = 3,
    max = 25;
    const naam = naamEl.value.trim();

    if (!isRequired(naam)) {
        showFout(naamEl, 'Vul je voor- en achternaam in.');
    } else if (!isBetween(naam.length, min, max)) {
        showFout(naamEl, `Je naam moet tussen de ${min} en ${max} tekens bevatten.`);
    } else {
        showGoed(naamEl);
        valid = true;
    }
    return valid;
};

const checkEmail = () => {
    let valid = false;
    const emailadres = emailadresEl.value.trim();
    if (!isRequired(emailadres)) {
        showFout(emailadresEl, 'Vul je e-mailadres in.');
    } else if (!isEmailValid(emailadres)) {
        showFout(emailadresEl, 'Dit is geen geldig e-mailadres.');
    } else {
        showGoed(emailadresEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (emailadres) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailadres);
};
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showFout = (input, message) => {
    
    const formField = input.parentElement;

    formField.classList.remove('goed');
    formField.classList.add('fout');

    const fout = formField.querySelector('small');
    fout.textContent = message;
};
const showGoed = (input) => {
    
    const formField = input.parentElement;
    
    formField.classList.remove('fout');
    formField.classList.add('goed'); 

    
    const fout = formField.querySelector('small');
    fout.textContent = '';
};


form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isNaamValid = checkNaam(),
        isEmailValid = checkEmail();

    let isFormValid = isNaamValid &&
        isEmailValid;

    if (isFormValid) {

    }
});

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'naam':
            checkNaam();
            break;
        case 'emailadres':
            checkEmail();
            break;
    }
});


window.addEventListener("beforeunload", function (e) {
    let confirmationMessage = '';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});