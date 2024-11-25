// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita os dois números ao usuário
const num1 = parseFloat(prompt('Digite o primeiro número: '));
const num2 = parseFloat(prompt('Digite o segundo número: '));

// Calcula a soma
const soma = num1 + num2;

// Exibe o resultado
console.log(`A soma de ${num1} e ${num2} é: ${soma}`);