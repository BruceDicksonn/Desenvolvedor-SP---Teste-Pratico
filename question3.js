const faturamentoDiario = require('./dados.json').filter(value => value.valor != 0); //retira finais de semana

console.log(faturamentoDiario)

const menorValorDeFaturamento = faturamentoDiario.reduce((prev, curr) => prev.valor < curr.valor ? prev:curr);
const maiorValorDeFaturamento = faturamentoDiario.reduce((prev, curr) => prev.valor > curr.valor ? prev:curr);
const mediaMensal = faturamentoDiario.reduce((prev, curr) => {return {valor:(prev.valor + curr.valor)}}).valor / faturamentoDiario.length;
const qtdDiasDoMesComValorDiarioMaiorQueAMedia = faturamentoDiario.reduce((prev, curr) => curr.valor > mediaMensal ? prev+=1:prev,0);

console.log(`\nMenor valor de faturamento: ${menorValorDeFaturamento.valor.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`);
console.log(`\nMaior valor de faturamento: ${maiorValorDeFaturamento.valor.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`);
console.log(`\nMédia mensal: ${mediaMensal.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`);
console.log(`\nNúmero de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${qtdDiasDoMesComValorDiarioMaiorQueAMedia} dias`);


/* 

3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
faça um programa, na linguagem que desejar, que calcule e retorne:

• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.


*/