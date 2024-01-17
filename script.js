function revealImages() {
    var images = document.getElementById('hidden-images').getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'inline-block';
    }
}

function verificarNome() {
    var nomeDigitado = document.getElementById('nomeEspecie').value;
    var respostaNome = document.getElementById('respostaNome');

    if (nomeDigitado.toLowerCase() === 'namorada do lolo') {
        respostaNome.innerHTML = 'Parabéns, gostei desse nome!<br>Vai combinar com esse bixo esquisito';
    } else {
        respostaNome.innerHTML = 'Hmm, não gostei<br>Dica: É namorada de quem?'
    }
}
