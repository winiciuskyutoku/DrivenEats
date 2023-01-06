let comida, preco1Numero, bebida, preco2Numero, sobremesa, preco3Numero, soma, somaCorrigida, novoURL, somaTotal, endereco, nome

function selecionado(pratoSelecionado) {
    const primeiroSelecionado1 = document.querySelector(".bordaVerde1");

    if (primeiroSelecionado1 !== null) {
        primeiroSelecionado1.classList.toggle('bordaVerde1');
    }

   const teste1 = document.querySelector(pratoSelecionado);
   console.log(teste1);
   teste1.classList.toggle('bordaVerde1');

    comida = teste1.querySelector("h2").innerHTML;
   preco1 = teste1.querySelector("strong").innerHTML;
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
    preco2 = teste2.querySelector("strong").innerHTML;
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
        
        calculadorPedido();

        trocarURL();

        
    }   

}


function calculadorPedido() {
    soma = preco1Numero + preco2Numero + preco3Numero;
    somaCorrigida = soma.toFixed(2);
    console.log(somaCorrigida);
}

function menuConfirmacao() {


    document.getElementById("confirmarComida").innerHTML = comida;
    document.getElementById("confirmarComidaPreco").innerHTML = preco1;

    document.getElementById("confirmarBebida").innerHTML = bebida;
    document.getElementById("confirmarBebidaPreco").innerHTML = preco2;

    document.getElementById("confirmarSobremesa").innerHTML = sobremesa;
    document.getElementById("confirmarSobremesaPreco").innerHTML = preco3;

    somaTotal = somaCorrigida.replace(".",",");

    document.getElementById("confirmarTotal").innerHTML = "R$ " + somaTotal;

    let confirmar = document.querySelector(".menuConfirmacao");
    confirmar.classList.remove("menuConfirmacao");
    confirmar.classList.add("menuConfirmacao2");

    const corpo = document.querySelector(".container");
    corpo.classList.add("transparente");


    nome = prompt("Qual o seu nome?");
    endereco = prompt("Qual o seu endereço");

}


function trocarURL() {
    novoURL = `https://wa.me/5544988598008?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%0A-%20Prato:%20 ${comida} %0A-%20Bebida:%20 ${bebida} %0A-%20Sobremesa:%20 ${sobremesa} %0ATotal:%20R$%20 ${somaCorrigida}`;
    /* document.getElementById("botaoPedido").href = novoURL; */
    document.querySelector(".botaoPedido").innerHTML = "Fechar pedido";
    document.getElementById("botaoPedido").disabled = false;
}


