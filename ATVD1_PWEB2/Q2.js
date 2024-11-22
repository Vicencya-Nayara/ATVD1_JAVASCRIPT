// Criar um array de números e escrever uma função que retorne a soma de todos os elementos do array.

function somaArray(numeros) {
    return numeros.reduce((soma, num) => soma + num, 0);
}

const array = [10, 20, 30, 40];
console.log("Soma dos elementos:", somaArray(array));
