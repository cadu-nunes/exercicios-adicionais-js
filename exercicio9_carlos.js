// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita o valor total da compra, o número de parcelas e a taxa de juros mensal
const valorTotal = parseFloat(prompt('Digite o valor total da compra: '));
const numeroParcelas = parseInt(prompt('Digite o número de parcelas: '));
const taxaJuros = parseFloat(prompt('Digite a taxa de juros mensal (em %): ')) / 100; // Converte a taxa para decimal

// Calcula o valor da parcela com juros compostos
const parcela = (valorTotal * (1 + taxaJuros) ** numeroParcelas * taxaJuros) / ((1 + taxaJuros) ** numeroParcelas - 1);

// Exibe as informações sobre o valor total, número de parcelas, taxa de juros e valor de cada parcela
console.log(`\nDetalhes da Compra com Juros:`);
console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);
console.log(`Número de Parcelas: ${numeroParcelas}`);
console.log(`Taxa de Juros: ${taxaJuros * 100}%`);
console.log(`Valor de Cada Parcela: R$ ${parcela.toFixed(2)}`);