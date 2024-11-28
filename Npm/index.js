import promptSync from "prompt-sync";
const prompt = promptSync();

// const nome = prompt("Qual é o seu nome? ");
// const idade = prompt("Qual é a sua idade? ");
// const dia = prompt("Hoje é sexta-feira?");
// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof dia);

// Escreva um código que faz uma contagem regressiva de 10 a 0.

// for (let i = prompt("Digite o número para iniciar a contagem regressiva: "); i > 0; i--) {
//     console.log(i);
// }


// Escreva um código que declara um array com 6 números à sua escolha, passe por todos os itens do array e imprima no console o maior valor dentro do array.

// var itens = prompt("Informe números separados por virgula ").split(',').map(item=>parseInt(item)).filter(item=>!isNaN(item));
// var maiorValor = null;

// for (let i = 0; i < itens.length; i++) {
//     const itemAtual = itens[i];
//     if (maiorValor == null || itemAtual > maiorValor) {
//         maiorValor = itemAtual;
//     }
// }

// console.log(maiorValor);

// Exemplo de como calcular a média
//let soma=0;
//itens.forEach(item=>soma+=item);
//console.log("A média dos valores é" +soma/itens.length);


// Escreva um código que faz a soma de todos os valores pares de 0 a 100.

// let soma=0;
// const num = prompt("Informe um número: ");
// for (let i = 0; i <= num; i = i + 2) {
//     soma += i
// }
// console.log(soma);


// Escreva um código que faz a soma de todos os valores de um array.

// const array = prompt("Informe números separados por virgula ").split(',').map(array=>parseInt(array));
// let soma=0;

// for(let i=0;i<array.length;i++){
//     soma+=array[i];
// }

// console.log(soma)


// Escreva um código que imprime um array com todos os valores ímpares de 1 a 100.

// CALCULADORA

// let a = 5;
// let b = 9;

// console.log("Escolha uma operação:\n1. Soma \n2. Subtração \n3. Divisão \n4. Multiplicação \n5. Sair\n")
// const operacao = prompt("");

// switch (operacao) {
//     case "1":
//         console.log(a + b);
//         break;

//     case "2":
//         console.log(a - b);
//         break;

//     case "3":
//         console.log(a / b);
//         break;

//     case "4":
//         console.log(a * b);
//         break;

//     case "5":
//         console.log("FIM");
//         break;

// }


//Exemplos
let valor;
let valorValido = false;
while (!valorValido){
    valor=parseInt(prompt("Insira um número menor ou igual a 15: "));

    if(valor<=15){
        valorValido=true;
    }else{
        console.log("Valor inválido");
    }
}

console.log("O valor escolhido foi "+ valor);



let valores=[];

while (valores.length<6){
    let valor=parseInt(prompt("Insira um número: "));

    if(isNaN(valor)){
        console.log("Valor inválido!");
    }else{
        valores.push(valor);
    }
}

console.log("Os valores escolhidos foram "+ valores+".");
