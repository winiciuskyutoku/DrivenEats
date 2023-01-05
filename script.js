function selecionado(pratoSelecionado) {
    const primeiroSelecionado1 = document.querySelector(".bordaVerde1");

    if (primeiroSelecionado1 !== null) {
        primeiroSelecionado1.classList.toggle('bordaVerde1');
    }

   const teste1 = document.querySelector(pratoSelecionado);
   console.log(teste1);
   teste1.classList.toggle('bordaVerde1');

    verificar();

}

function selecionado2(bebidaSelecionado) {
    const primeiroSelecionado2 = document.querySelector(".bordaVerde2");

    if (primeiroSelecionado2 !== null) {
        primeiroSelecionado2.classList.toggle('bordaVerde2');
    }

   const teste2 = document.querySelector(bebidaSelecionado);
   console.log(teste2);
   teste2.classList.toggle('bordaVerde2');

   verificar(); 


}

function selecionado3(sobremesaSelecionado) {
    const primeiroSelecionado3 = document.querySelector(".bordaVerde3");

    if (primeiroSelecionado3 !== null) {
        primeiroSelecionado3.classList.toggle('bordaVerde3');
    }

   const teste3 = document.querySelector(sobremesaSelecionado);
   console.log(teste3);
   teste3.classList.toggle('bordaVerde3');

   verificar();


}

function verificar() {
    const verificar1 = document.querySelector(".bordaVerde1");
    const verificar2 = document.querySelector(".bordaVerde2");
    const verificar3 = document.querySelector(".bordaVerde3");

    if (verificar1 !== null && verificar2 !== null && verificar3 !== null) {
        const mudarBotao = document.querySelector(".botaoPedido");
        mudarBotao.classList.add("botaoVerde");
        
        const finalizarBotao2 = document.querySelector(".finalizarPedido2");
        finalizarBotao2.classList.add("escondido");
        
        const finalizarBotao1 = document.querySelector(".finalizarPedido1");
        finalizarBotao1.classList.remove('finalizarPedido1')
        finalizarBotao1.classList.add("aparecendo");
        
    }   
}

