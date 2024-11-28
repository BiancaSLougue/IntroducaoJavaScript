// // 1. Escreva um código que declara um array com 6 números à sua escolha, passe por todos os itens do array e imprima no console o maior valor dentro do array.

// var itens = [1, 2, 3, 4, 5, 6];
// var maiorValor = null;

// for (let i = 0; i < itens.length; i++) {
//     const itemAtual = itens[i];
//     if (maiorValor == null || itemAtual > maiorValor) {
//         maiorValor = itemAtual;
//     }
// }

// console.log(maiorValor);

// /*
// let maiorValor2 = null;
// let i = 0;

// const itemAtual = itens[i];
// while (i < itens.length) {
//     i++;
//     if (itemAtual > maiorValor2) {
//         maiorValor2 = itemAtual;
//     }
// }
// console.log(maiorValor2);
// */
// let maiorValor2 = null;
// let contador = 0;

// while (contador < itens.length) {
//     const itemAtual2 = itens[contador];

//     if (maiorValor2 == null || itemAtual2 > maiorValor2) {
//         maiorValor2 = itemAtual2;
//     }
//     contador++;
// }

// console.log(maiorValor2);


// // 2. Escreva um código que faz uma contagem regressiva de 10 a 0.
// /*let newitens=[];
// let cont = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = cont.length; i >0; i--) {
//     newitens.push(i);

// }
// console.log(newitens)
// */

// for (let i = 10; i > 0; i--) {
//     console.log(i);

// }

// let i = 10;
// while (i >= 0) {
//     console.log(i);

//     i--;
// }


// /*
// let i = 0;

// const newItens2 = [];
// while (i > 0) {
//     newitens.push(i);
//     i--;
//     if (itemAtual > maiorValor2) {
//         maiorValor2 = itemAtual;
//     }
// }
// console.log(maiorValor2);*/

// // 3. Escreva um código que faz a soma de todos os valores pares de 0 a 100.
// /*console.log("Item 3 - For")
// let valorAtual=0;
// for (i = 0; i <= 100; i = i + 2) {
//     console.log(valorAtual + i);

// }
// soma+=i
// console.log("Item 3 - While")
// let valorAtual2=0;
// let ii = 0;
// while (ii <= 100) {
//     console.log(valorAtual2+ii);

//     ii=ii+2;
// }*/
// let soma = 0
// for (i = 0; i <= 100; i = i + 2) {
//     soma += i
// }
// console.log(soma)

// let soma2 = 0;
// let contador2 = 0;

// while (contador2 <= 100) {
//     soma2 += contador2
//     contador2 += 2;
// }
// console.log(soma2);

// 4. Escreva um código que faz a soma de todos os valores de um array.
// let b = [5, 15, 25, 35, 45, 55];
// let somaArr = 0;
// for (i = 0; i < b.length; i++) {
//     somaArr += b[i];
// }
// console.log(somaArr);

// let contador = 0;
// let somaArr2 = 0;

// while (contador < b.length) {
//     somaArr2 += b[contador];
//     contador++;
// }

// console.log(somaArr2);

// 5. Escreva um código que imprime um array com todos os valores ímpares de 1 a 100.

// console.log("Item 5 - For")

// let impares = [];

// for (i = 1; i <= 100; i += 2) {
//     //impares.push(i);
//     impares[impares.length] = i;
// }

// console.log(impares);

// console.log("Item 5 - While")
// let impares2 = [];
// let contador2 = 1;
// while (contador2 <= 100) {
//     impares2[impares2.length] = contador2;
//     //length sempre possuirá o valor do próximo índice a ser atribuido
//     contador2 += 2;
// }

// console.log(impares2);

// 6. Escreva um código que inverte a string "lorem ipsum dolor sit amet".
var texto = "lorem ipsum dolor sit amet";
var textoInvertido="";
for (let i = texto.length-1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log(textoInvertido);

var textoInvertido2="";
let contador2 = texto.length-1;

while(contador2 >= 0){
    textoInvertido2 += texto[contador2];
    contador2--;
}

console.log(textoInvertido2);

// Ctrl+; comenta ou tira o comentário de tudo que tá selecionado