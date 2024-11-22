//6. Crie um programa que receba um número inteiro e mostre uma contagem regressiva até zero no console.

const prompt = require('prompt-sync')();
function contagemRegressiva() {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}
contagemRegressiva();
