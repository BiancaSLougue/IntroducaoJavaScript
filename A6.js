//Desafio Fácil 1 PDF 4 - Escreva uma função que recebe um array e inverte a posição dos elementos;

/*  COMO EU ESTAVA FAZENDO

const arr1 = [1,2,3,4,5,6];

function invertePosição(numero) {
    
    const tamanhoArr = arr1.length;

    let arrInvertido = [];

    for (let contador = tamanhoArr - 1; contador >= 0; contador = contador - 1) {
        arrInvertido = arrInvertido.concat(arr1[contador])

    }

    console.log(arrInvertido);

}*/

function inverteArray(arr) {
    let arrInvertido = [];

    while (arr.length != arrInvertido.length) {
        const indiceAtual = (arr.length - arrInvertido.length) - 1;
        let indiceInvertido = arrInvertido.length;

        arrInvertido[indiceInvertido] = arr[indiceAtual];
    }

    return arrInvertido;
}

console.log(inverteArray([1, 2, 3]));

// Versão fácil

console.log([1, 2, 3, 4].reverse())

//Desafio Fácil 2 PDF 4 - Escreva uma função que recebe um array e um item, e insere o item no final do array;

/*  COMO EU ESTAVA FAZENDO
function concatArrayItem(arr,item) {
    
    
    const a= [];
    const b = {
        chave: "valor"
        }
        
    a.push(b)

}

console.log(concatArrayItem([1,2,3],9));
*/

function insereNoFim(arr, item) {
    arr[arr.length] = item;

}
console.log(insereNoFim([1, 2, 3], (5)))
//vai retornar undefined, pq ele não tem return; undefined retorna quando não tem return

function insereNoFim2(arr, item) {
    return [...arr, item];
    // ... é um espalhador, extrai todos os valores de um objeto Ex: [1,2,3],5 transforma em [1,2,3,5]
}
console.log(insereNoFim2([1, 2, 3], (5)))
//vai retornar o certo


console.log([1, 2, 3].push(5));
//vai retornar o tamanho do array, teria que atribuir o array a uma constante e depois dar um push




//  DESAFIO MÉDIO 1 PDF 4 - Escreva uma função que recebe um array numérico, e retorna o maior valor;

/*function maiorValor(arr){
    for (let contador = 0; contador<=maiorValor.length; contador++) {
        const Maior = ;

       
    }
    
    
}
*/

function retornaMaior(arr) {
    let maiorValor = 0;

    for (let contador = 0; contador < arr.length; contador++) {
        if (arr[contador] > maiorValor) {
            maiorValor = arr[contador]
        }
    }
    return maiorValor;
}

console.log(retornaMaior([1, 2, 3, 4, 18]));

//Jeito mais fácil de fazer
Math.max()

//Desafio Médio 2 PDF 4 - Escreva uma função que recebe um array numérico, e retorna o menor valor;

function retornaMenor(arr) {
    let menorValor = arr[0];

    for (let contador = 0; contador < arr.length; contador++) {
        if (arr[contador] < menorValor) {
            menorValor = arr[contador]
        }
    }
    return menorValor;
}

console.log(retornaMenor([1, 2, 3, 4, 18]));

//Jeito mais fácil de fazer
Math.min()

//Desafio Médio 3 PDF 4 - Escreva uma função que recebe um array, e retorna um novo array sem valores repetidos.

//função index of mostra a posição de um item, quando ele não encontra retorna -1, se tem mais de um ele retorna só a posição do priomeiro encontrado
function retornaUnicos(arr) {
    let resultado = [];

    for (let contador = 0; contador < arr.length; contador++) {
        const item = arr[contador];
        if (!resultado.includes(item)) {//tbm poderia usar index of comparando com -1 ao invés de includes
            resultado.push(item);
        }
    }
    return resultado;
}

console.log(retornaUnicos([1, 2, 2, 5, 8, 5, 6, 9]))

//Jeito mais fácil
console.log(new Set([1, 2, 2, 5, 8, 5, 6, 9]))

//Desafio Difícil 1 PDF 4 - Escreva uma função que recebe um array numérico, e retorna um novo array com os valores ordenados em ordem crescente.
/*
function ordemCrescente(arr) {
    let resultado = [];

    for (let contador = 0; contador < arr.length; contador++) {
        const item = arr[contador];
        if (resultado.includes(item)&&item>) {//tbm poderia usar index of comparando com -1 ao invés de includes
            resultado.push(item);
        }
    }
    return resultado;
}*/


