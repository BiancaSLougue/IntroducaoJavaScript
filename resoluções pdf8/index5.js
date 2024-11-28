let impares = [];

for (let i = 1; i <= 100; i += 2) {
    impares.push(i);
}

console.log(impares);

let impares2 = [];
let contador = 1;

while (contador <= 100) {
    // length sempre possuirá o valor da próximo índice a ser atribuida
    impares2[impares2.length] = contador;

    contador += 2;
}

console.log(impares2);