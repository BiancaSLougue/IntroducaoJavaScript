const numeros = [2, 6, 8, 5, 3];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);

let soma2 = 0;
let contador = 0;

while (contador < numeros.length) {
    soma2 += numeros[contador];

    contador++;
}

console.log(soma2);