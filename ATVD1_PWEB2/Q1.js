/*1 . Criar um programa em JavaScript que pergunta o nome e a idade do usuário e 
imprime uma mensagem de saudação com base na idade (maior ou menor de idade).*/ 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function saudacao() {
    rl.question("Qual é o seu nome? ", (nome) => {
        rl.question("Qual é a sua idade? ", (idade) => {
            idade = parseInt(idade);
            if (idade >= 18) {
                console.log(`Olá, ${nome}! Você é maior de idade.`);
            } else {
                console.log(`Olá, ${nome}! Você é menor de idade.`);
            }
            rl.close();
        });
    });
}

saudacao();
