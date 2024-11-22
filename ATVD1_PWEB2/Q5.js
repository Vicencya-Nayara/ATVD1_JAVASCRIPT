// Crie um programa que receba três números do usuário e imprima-os em ordem crescente.

const prompt = require('prompt-sync')();
function ordenarNumeros() {
    let numeros = [];
    for (let i = 0; i < 3; i++) {
        numeros.push(parseInt(prompt(`Digite o ${i + 1}º número:`)));
    }
    numeros.sort((a, b) => a - b);
    console.log("Números em ordem crescente:", numeros);
}
ordenarNumeros();
