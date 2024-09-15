const prompt = require("prompt-sync")();

const numeroInformado = Number(prompt("Informe um número para a sequência de Fibonacci: "));

function fibonacci(numeroLimite){
    const listaFibonnaci = [0,1];

    for (let i = 0; i < numeroLimite; ){
        i = listaFibonnaci[listaFibonnaci.length - 1] + listaFibonnaci[listaFibonnaci.length - 2];
        listaFibonnaci.push(i);
    }

    return listaFibonnaci
}

const lista = fibonacci(numeroInformado);
console.log(lista)

if(lista.includes(numeroInformado)){
    console.log("O valor informado está presente na lista de Fibonacci!");
} else{
    console.log("O valor informado não pertence a lista de Fibonacci.");
}