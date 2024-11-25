// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita o ano de nascimento ao usuário
const anoNascimento = parseInt(prompt('Digite o seu ano de nascimento: '));

// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Calcula a idade
const idade = anoAtual - anoNascimento;

// Exibe a idade
console.log(`Você tem ${idade} anos.`);