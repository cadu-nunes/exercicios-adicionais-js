// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita um número ao usuário
const numero = parseInt(prompt('Digite um número: '));

// Verifica se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
} else {
    console.log(`O número ${numero} é ímpar.`);
}