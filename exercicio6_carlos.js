// Importa a biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Solicita o nome do produto, o preço original e a porcentagem de desconto
const nomeProduto = prompt('Digite o nome do produto: ');
const precoOriginal = parseFloat(prompt('Digite o preço original do produto: '));
const porcentagemDesconto = parseFloat(prompt('Digite a porcentagem de desconto: '));

// Calcula o valor do desconto
const valorDesconto = (precoOriginal * porcentagemDesconto) / 100;

// Calcula o preço final após o desconto
const precoFinal = precoOriginal - valorDesconto;

// Exibe as informações do produto e do desconto
console.log(`\nDetalhes do Produto:`);
console.log(`Produto: ${nomeProduto}`);
console.log(`Preço Original: R$ ${precoOriginal.toFixed(2)}`);
console.log(`Desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Preço Final com Desconto: R$ ${precoFinal.toFixed(2)}`);