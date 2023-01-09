let termos = 6;
let resposta = [0,1];
let penultimo=0, ultimo=1;

const fibonacci = (numero=0) => {

     for(let count = 2 ; count < termos ; count++){
      
        resposta.push(ultimo + penultimo);
        ultimo = resposta[count];
        penultimo = resposta[count-1];
        

     }

    console.log(resposta);

    return resposta.some(res => numero === res) ? '\nO número informado pertence a sequência':'\nO número informado não pertence a sequência';

}


console.log(fibonacci(3))




/* 

Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 

(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 

escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

*/