const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log("submit");
     validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('p');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccsess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('p');
    
    errorDisplay.remove;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidPassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,18}$/;
    return re.test(password);
}

const isValidEmail = email => {
    const re =  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Password Required*');
    }else {
        setSuccsess(username);
    }

    if(emailValue === '') {
        setError(email, 'Password Required*');
    }else if (!isValidEmail(emailValue)) {
        setError(email, 'Something went wrong. Please try again');
    }else {
        setSuccsess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password Required*');
    }else if (!isValidPassword(passwordValue)) {
        setError(password, 'Something went wrong. Please try again');
    }else {
        setSuccsess(password);
    }

    if (confirmPasswordValue === '') {
        setError(confirmPassword, 'Password Required*');
    }else if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, 'Something went wrong. Please try again');
    }else {
        setSuccsess(confirmPassword);
    }
};
