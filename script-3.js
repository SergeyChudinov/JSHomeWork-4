const formEl = document.querySelector('form');
const inputText = document.querySelector('.text');
const inputNumber = document.querySelector('.number');
const inputEmail = document.querySelector('.email');
const inputTextarea = document.querySelector('.textarea');
const submit = document.querySelector('.submit');

const textError = document.querySelector('.textError');
const numberError = document.querySelector('.numberError');
const emailError = document.querySelector('.emailError');
const textareaError = document.querySelector('.textareaError');

submit.addEventListener('click', event => {
    event.preventDefault();
    if (inputText.value === "") {
        textError.textContent = 'Имя не может быть пустым';
        inputText.classList.add('error');
        return
    }
    if (/[^a-z]&[^а-яё]/i.test(inputText.value)) {   //  || /[^а-яё]/i.test(inputText.value) не работает  (/[^a-z]/|/[^а-яё]/i.test(inputText.value))
        textError.textContent = 'Имя должно содержать только буквы.'
        inputText.classList.add('error');
        return
    }
    if (inputNumber.value === "") {
        numberError.textContent = 'Телефон не может быть пустым';
        inputNumber.classList.add('error');
        return
    }
    if (!/\+7\(\d{3}\)\d{3}\-\d{4}/.test(inputNumber.value)) {
        numberError.textContent = 'Телефон должен иметь вид +7(000)000-0000.';
        inputNumber.classList.add('error');
        return
    }
    if (inputEmail.value === "") {
        emailError.textContent = 'Почта не может быть пустым';
        inputEmail.classList.add('error');
        return
    }
    if (!/\w+[\.\-]?mail\@mail\.ru/.test(inputEmail.value)) {
        emailError.textContent = 'E-mail должен иметь вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.';
        inputEmail.classList.add('error');
        return
    }
    if (inputTextarea.value === "") {
        textareaError.textContent = 'Сообщение не может быть пустым';
        inputTextarea.classList.add('error');
        return
    }
})

inputText.addEventListener('input', event => {      
    event.target.value === ''
    ? event.target.classList.add('error')
    : event.target.classList.remove('error');
    if (event.target.value !== '') {
        textError.textContent = '';
    }
});
inputNumber.addEventListener('input', event => {      
    event.target.value === ''
    ? event.target.classList.add('error')
    : event.target.classList.remove('error');
    if (event.target.value !== '') {
        numberError.textContent = '';
    }
});
inputEmail.addEventListener('input', event => {      
    event.target.value === ''
    ? event.target.classList.add('error')
    : event.target.classList.remove('error');
    if (event.target.value !== '') {
        emailError.textContent = '';
    }
});
inputTextarea.addEventListener('input', event => {      
    event.target.value === ''
    ? event.target.classList.add('error')
    : event.target.classList.remove('error');
    if (event.target.value !== '') {
        textareaError.textContent = '';
    }
});  