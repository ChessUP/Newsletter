const form = document.querySelector('form');
const email = document.querySelector('#email');
const error = document.querySelector('.error');
const messagem = document.querySelector('.messagem-success');
const successAll = document.querySelector('.success');
const backcolor = document.querySelector('.backcolor');

function defult(e) {
    e.preventDefault();
    validador();
}

function validador() {
    const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!testEmail.test(email.value)) {
        email.style.border = '1px solid var(--Red)';
        email.style.backgroundColor = 'var(--lightRed)';
        email.style.color = 'var(--Red)';
        error.style.display = 'block';
    } else {
        messagem.style.display = 'flex';
        successAll.style.display = 'flex';
        backcolor.style.display = 'flex';
    }
}

function back() {
    messagem.style.display = 'none';
    backcolor.style.display = 'none';
    error.style.display = 'none';
    email.style.border = '';
    email.style.backgroundColor = '';
    email.style.color = '';
    email.value = '';

}


form.addEventListener('submit', defult);