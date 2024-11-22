//Crie uma função que recebe uma string como parâmetro e retorna a quantidade de vogais (a, e, i, o, u) na string.

const prompt = require('prompt-sync')();

function contarVogais(frase) {
    let contador = 0;
    const letras = "aeiouAEIOU";  
    for (let char of frase) {
        if (letras.includes(char)) {
            contador++;
        }
    }
    return contador;
}

let frase = prompt("Digite uma frase: ");
console.log(`A quantidade de vogais na frase é: ${contarVogais(frase)}`);
