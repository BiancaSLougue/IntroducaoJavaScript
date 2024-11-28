const itensA = [ 1, 4, 7, 89, 3, 0 ];
let maiorValorA = null;

for (let i = 0; i < itensA.length; i++) {
    const itemAtual = itensA[i];

    if (maiorValorA == null || itemAtual > maiorValorA) {
        maiorValorA = itemAtual;
    }
}

console.log(maiorValorA);

const itensB = [ 1, 4, 7, 89, 3, 0 ];
let maiorValorB = null;
let contador = 0;

while (contador < itensB.length) {
    const itemAtual = itensB[contador];

    if (maiorValorB == null || itemAtual > maiorValorB) {
        maiorValorB = itemAtual;
    }

    contador++;
}

console.log(maiorValorB);