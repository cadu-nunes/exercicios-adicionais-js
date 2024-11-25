// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita o valor total da compra e o número de parcelas
const valorTotal = parseFloat(prompt('Digite o valor total da compra: '));
const numeroParcelas = parseInt(prompt('Digite o número de parcelas: '));

// Calcula o valor de cada parcela
const valorParcela = valorTotal / numeroParcelas;

// Exibe as informações sobre o valor total, número de parcelas e valor de cada parcela
console.log(`\nDetalhes da Compra:`);
console.log(`Valor Total: R$ ${valorTotal.toFixed(2)}`);
console.log(`Número de Parcelas: ${numeroParcelas}`);
console.log(`Valor de Cada Parcela: R$ ${valorParcela.toFixed(2)}`);