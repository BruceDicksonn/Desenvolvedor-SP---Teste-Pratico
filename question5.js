const word = "The world is yours - Tony Montana"

const wordArray = word.split('');

function inverterPalavra(word="") {
    let wordReturned = "";

    for(let i = word.length-1; i >= 0; i--){
        wordReturned+= word[i];
    }

    return wordReturned;
}

console.log(inverterPalavra(word))

/* 

5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

*/