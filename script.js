const form = document.querySelector('form');
const messagem = document.querySelector('.messagem-success');

function validador(e) {
    e.preventDefault();

   messagem.style.display = 'block';

}

form.addEventListener('submit', validador);