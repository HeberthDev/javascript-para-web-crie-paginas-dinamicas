function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    
    if (elemento == null) {
        alert('Elemento não encontrado');
    }

    if (elemento != null) {
        if (elemento.localName === 'audio') {
            elemento.play();
        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter' ) { // adição da operador lógico OU (||)
            tecla.classList.add('ativa');
        }
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}