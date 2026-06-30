const imagens = document.querySelectorAll('.logos img');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

let indexAtual = 0; // Começa na primeira imagem (index 0)

function mudarImagem(novoIndex) {
    // Remove a classe 'active' da imagem atual
    imagens[indexAtual].classList.remove('active');
    
    // Atualiza o index
    indexAtual = novoIndex;
    
    // Se passar da última imagem, volta para a primeira
    if (indexAtual >= imagens.length) {
        indexAtual = 0;
    }
    // Se for antes da primeira imagem, vai para a última
    else if (indexAtual < 0) {
        indexAtual = imagens.length - 1;
    }
    
    // Adiciona a classe 'active' na nova imagem correspondente
    imagens[indexAtual].classList.add('active');
}

// Evento do botão Próximo
btnProximo.addEventListener('click', () => {
    mudarImagem(indexAtual + 1);
});

// Evento do botão Anterior
btnAnterior.addEventListener('click', () => {
    mudarImagem(indexAtual - 1);
});