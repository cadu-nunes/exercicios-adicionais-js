// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita o número de horas trabalhadas por semana e o valor da hora trabalhada
const horasPorSemana = parseInt(prompt('Digite o número de horas trabalhadas por semana: '));
const valorHora = parseFloat(prompt('Digite o valor da sua hora trabalhada: '));

// Calcula o salário semanal
const salarioSemanal = horasPorSemana * valorHora;

// Calcula o salário mensal (assumindo 4 semanas por mês)
const salarioMensal = salarioSemanal * 4;

// Exibe os resultados
console.log(`\nDetalhes do Salário:`);
console.log(`Salário Semanal: R$ ${salarioSemanal.toFixed(2)}`);
console.log(`Salário Mensal: R$ ${salarioMensal.toFixed(2)}`);