// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita os dois números ao usuário
const num1 = parseFloat(prompt('Digite o primeiro número: '));
const num2 = parseFloat(prompt('Digite o segundo número: '));

// Calcula a diferença entre o maior e o menor número
const maiorNumero = Math.max(num1, num2);
const menorNumero = Math.min(num1, num2);
const diferenca = maiorNumero - menorNumero;

// Exibe o resultado
console.log(`A diferença entre o maior (${maiorNumero}) e o menor (${menorNumero}) é: ${diferenca}`);