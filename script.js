const form = document.querySelector('form');
const email = document.querySelector('#email');
const error = document.querySelector('.error');
const messagem = document.querySelector('.messagem-success');

function defult(e) {
    e.preventDefault();
    validador();
}

function validador() {
    if (email.value.length < 10) { //Validar com uso de Regex
        email.style.border = '1px solid var(--Red)';
        email.style.backgroundColor = 'var(--lightRed)';
        email.style.color = 'var(--Red)';
        error.style.display = 'block';
    } else {
        messagem.style.display = 'flex';
    }

}


form.addEventListener('submit', defult);