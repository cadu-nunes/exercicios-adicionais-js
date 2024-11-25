// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita a temperatura em Celsius
const celsius = parseFloat(prompt('Digite a temperatura em Celsius: '));

// Converte a temperatura para Fahrenheit
const fahrenheit = (celsius * 9/5) + 32;

// Exibe o resultado
console.log(`${celsius}°C é igual a ${fahrenheit}°F.`);