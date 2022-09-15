/*
OBJETIVO 1 - quando clicarmos na seta de avançar, temos que mostrar o próximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que está selecionado e esconder (não podemos ter mais de 1 cartão aparecendo)

OBJETIVO 2 - quando clicar na seta voltar, temos que mostrar o cartão anterior da lista
    - passo 5 - pegar o elemento HTML da seta voltar
    - passo 6 - identificar clique do usuario na seta voltar
    - passo 7 - fazer aparecer o cartão anterior da lista
    - passo 8 - buscar o cartão que esta selecionado e esconder
*/

//passo 1
//atribuimos um id a seta avnçar lá no html e utilizamos o metodo getelementbyid, colocando isso dentro de uma variavel para facilitar a leitura do codigo
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
//passo 3
//utilizamos queryselectorall para buscar todos elementos que utilizem a classe .cartao e jogamos dentro de uma variavel
const cartoes = document.querySelectorAll('.cartao');

// variavel para o cartao atual/inicial / let é um tipo de variavel que pode ser alterada
let cartaoAtual = 0;

//APÓS TERMINAR e estar tudo funcionando como o esperado, podemos observar muitos codigos repetidos, logo devemos REFATORAR O CÓDIGO, ou seja, melhorar a leitura dele criando funções que repliquem os códigos repetidos.
function esconderCartaoSelecionado(){
    //passo 4
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
function mostrarCartao(indiceCartao){
    // o .add('selecionado') adiciona a classe ao cartão, fazendo ele aparecer
    cartoes[indiceCartao].classList.add('selecionado');
}
//passo 2
// ao pegar o id, podemos adicionar o metodo de eventlistener com 2 parametros: botão (clique) + o que acontece ao pressionar o botão
btnAvancar.addEventListener('click', function () {

    // essa condição do if é para quando chegar no ultimo cartão, o código pare de ser executado (para não ficar dando erros e executando códigos desnecessários)
    if(cartaoAtual === cartoes.length - 1) return;
    esconderCartaoSelecionado();
    cartaoAtual++; //cartaoAtual = cartaoAtual + 1
    mostrarCartao(cartaoAtual);

});


btnVoltar.addEventListener('click', function() {
    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
})