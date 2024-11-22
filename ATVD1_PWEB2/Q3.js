/*Crie uma calculadora simples que pergunte ao usuário dois números e, em seguida, 
a operação que ele deseja realizar (soma, subtração, multiplicação ou divisão). 
O programa deve imprimir o resultado da operação.*/

const prompt = require('prompt-sync')();

function calculadora() {
    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));
    const operacao = prompt("Digite a operação (+, -, *, /): ");

    switch (operacao) {
        case '+':
            console.log(`Resultado: ${num1 + num2}`);
            break;
        case '-':
            console.log(`Resultado: ${num1 - num2}`);
            break;
        case '*':
            console.log(`Resultado: ${num1 * num2}`);
            break;
        case '/':
            if (num2 !== 0) {
                console.log(`Resultado: ${num1 / num2}`);
            } else {
                console.log("Erro: divisão por zero.");
            }
            break;
        default:
            console.log("Operação inválida.");
    }
}

calculadora();
