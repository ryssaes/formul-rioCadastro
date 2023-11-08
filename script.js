const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// form.addEventListener('submit', (e) => {
//     // e.preventDefault();
//     checkInputs();
// });

function checkInputs(){
    const firstnameValue = firstname.value.trim(); 
    const lastnameValue = lastname.value.trim();   
    const emailValue = email.value.trim();        
    const passwordValue = password.value.trim();   

    if(firstnameValue === ''){
        errorValidation(firstname, 'First Name cannot be empty');
        return false;
        
    } else if (firstnameValue.length < 3) {
        errorValidation(firstname, 'First Name must have at least 3 characters');
        return false;
    }

    if(lastnameValue === ''){
        errorValidation(lastname, 'Last Name cannot be empty');
        return false;

    } else if (lastnameValue.length < 3) {
        errorValidation(lastname, 'Last Name must have at least 3 characters');
        return false;
    }

    if(emailValue === ''){
        errorValidation(email, 'Email Address cannot be empty');
        return false;

    } else if (!isValidEmail(emailValue)) {
        errorValidation(email, 'Looks like this is not a valid email');
        return false;
    }

    if(passwordValue === ''){
        errorValidation(password, 'Password cannot be empty');
        return false;

    } else if (passwordValue.length < 8) {
        errorValidation(password, 'Password must have at least 8 characters');
        return false;

    } else if (!/[A-Z]/.test(passwordValue)) {
        errorValidation(password, 'Password must contain at least one uppercase letter');
        return false;
    }
    return true;
}

function errorValidation(input, message){
    const formControl = input.parentElement;
    const p = formControl.querySelector('.error-text');

    p.innerText = message;
    formControl.classList.add('error');
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}