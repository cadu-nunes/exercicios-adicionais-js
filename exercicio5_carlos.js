// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita o nome do produto
const nomeProduto = prompt('Digite o nome do produto: ');

// Solicita o preço unitário e a quantidade comprada
const precoUnitario = parseFloat(prompt('Digite o preço unitário do produto: '));
const quantidade = parseFloat(prompt('Digite a quantidade comprada: '));

// Calcula o valor total da compra (sem imposto)
const valorTotalSemImposto = precoUnitario * quantidade;

// Calcula o valor do imposto de 18%
const imposto = valorTotalSemImposto * 0.18;

// Calcula o valor total da compra (com imposto)
const valorTotalComImposto = valorTotalSemImposto + imposto;

// Exibe as informações da compra
console.log(`\nDetalhes da compra:`);
console.log(`Produto: ${nomeProduto}`);
console.log(`Preço Unitário: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Imposto (18%): R$ ${imposto.toFixed(2)}`);
console.log(`Valor Total da Compra (com imposto): R$ ${valorTotalComImposto.toFixed(2)}`);