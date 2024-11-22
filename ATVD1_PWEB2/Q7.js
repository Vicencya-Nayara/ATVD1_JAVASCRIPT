//7. Crie uma função que receba uma string e retorne a string invertida.

const prompt = require('prompt-sync')();
function inverterString(texto) {
    return texto.split("").reverse().join("");
}

let palavra = prompt("Digite uma palavra ou frase:");
console.log("A string invertida é:", inverterString(palavra));
