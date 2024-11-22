//8. Crie um programa que receba três números e determine qual é o maior.

const prompt = require('prompt-sync')();

function maiorNumero() {
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        numeros.push(parseInt(prompt(`Digite o ${i + 1}º número:`)));
    }
    let maior = Math.max(...numeros);
    console.log(`O maior número é: ${maior}`);
}
maiorNumero();
