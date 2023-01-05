function selecionado(pratoSelecionado) {
    const primeiroSelecionado1 = document.querySelector(".bordaVerde1");

    if (primeiroSelecionado1 !== null) {
        primeiroSelecionado1.classList.toggle('bordaVerde1');
    }

   const teste1 = document.querySelector(pratoSelecionado);
   console.log(teste1);
   teste1.classList.toggle('bordaVerde1');

}

function selecionado2(bebidaSelecionado) {
    const primeiroSelecionado2 = document.querySelector(".bordaVerde2");

    if (primeiroSelecionado2 !== null) {
        primeiroSelecionado2.classList.toggle('bordaVerde2');
    }

   const teste2 = document.querySelector(bebidaSelecionado);
   console.log(teste2);
   teste2.classList.toggle('bordaVerde2');

}

function selecionado3(sobremesaSelecionado) {
    const primeiroSelecionado3 = document.querySelector(".bordaVerde3");

    if (primeiroSelecionado3 !== null) {
        primeiroSelecionado3.classList.toggle('bordaVerde3');
    }

   const teste3 = document.querySelector(sobremesaSelecionado);
   console.log(teste3);
   teste3.classList.toggle('bordaVerde3');

}
