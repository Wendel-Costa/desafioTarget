// Antes é necessário instalar o prompt-sync no terminal para utilizar no node... Comando para instalar: npm install prompt-sync

const prompt = require("prompt-sync")();

const texto = prompt("Informe seu texto: ");

textoFormal = texto.toLowerCase();

let quantidade = 0;

for (const letra of textoFormal) {
    if (letra === "a") {
        quantidade += 1;
    }
}

if (quantidade == 0){
    console.log("Seu texto não possui a letra \"a\" ");
} 

if (quantidade == 1){
    console.log("Seu texto possui 1 letra \"a\" ");
}

if (quantidade > 1) {
    console.log(`Seu texto possui ${quantidade} letras "a".`);
}