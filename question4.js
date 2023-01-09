const faturamentoMensal = require('./estados.json');
const valorTotalMensal = faturamentoMensal.reduce((curr,prev) => {return {faturamento:(prev.faturamento + curr.faturamento)}}).faturamento
const percentualCrescimento = faturamentoMensal.map(faturamento => {
    const percentual = faturamento.faturamento / valorTotalMensal;
    return JSON.stringify({...faturamento,percentual:`${percentual}%`});
});

console.log(percentualCrescimento)

/* 

4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

*/