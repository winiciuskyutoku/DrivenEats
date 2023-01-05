let comida, preco1Numero, bebida, preco2Numero, sobremesa, preco3Numero, soma, somaCorrigida

function selecionado(pratoSelecionado) {
    const primeiroSelecionado1 = document.querySelector(".bordaVerde1");

    if (primeiroSelecionado1 !== null) {
        primeiroSelecionado1.classList.toggle('bordaVerde1');
    }

   const teste1 = document.querySelector(pratoSelecionado);
   console.log(teste1);
   teste1.classList.toggle('bordaVerde1');

    comida = teste1.querySelector("h2").innerHTML;
   let preco1 = teste1.querySelector("strong").innerHTML;
    preco1Numero = Number(preco1.replace(",","."));
   console.log(comida);
   console.log(preco1Numero)

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

   bebida = teste2.querySelector("h2").innerHTML;
    let preco2 = teste2.querySelector("strong").innerHTML;
    preco2Numero = Number(preco2.replace(",","."));
   console.log(bebida);
   console.log(preco2Numero);

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

   sobremesa = teste3.querySelector("h2").innerHTML;
   preco3 = teste3.querySelector("strong").innerHTML;
   preco3Numero = Number(preco3.replace(",","."));
   
   console.log(sobremesa);
   console.log(preco3Numero);

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
        
        calculadorPedido();

        trocarURL();

    }   
}

function calculadorPedido() {
    soma = preco1Numero + preco2Numero + preco3Numero;
    somaCorrigida = soma.toFixed(2);
    console.log(somaCorrigida);
}

function trocarURL() {
    let novoURL = `https://wa.me/5544988598008?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%0A-%20Prato:%20 ${comida} %0A-%20Bebida:%20 ${bebida} %0A-%20Sobremesa:%20 ${sobremesa} %0ATotal:%20R$%20 ${somaCorrigida}`;
    document.getElementById("finalizarPedido1").href = novoURL;
}



