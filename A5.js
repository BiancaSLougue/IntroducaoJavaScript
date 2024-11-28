//Desafio Fácil 1 PDF 3

function somaValores(numero) {
    let resultado = 0;

    for (let contador = 1; contador <= numero; contador = contador + 1) {
        resultado = resultado + contador;

    }

    return resultado;
}

console.log(somaValores(5))
console.log(somaValores(23))

//contador=contador+1; é o mesmo que  contador=contador++
//resultado=resultado+contador; é o mesmo que resultado +=resultado[contador]

/* COMO ESTAVA FAZENDO Desafio Fácil 1
function somaValores(num){
    let contador = 0;

    for(let i=0; i<num.lenght; i++){
        contador +=num[i]
        return contador
    }
}

let num=4

console.log(somaValores(num))*/


//Desafio Fácil 2 PDF 3 - fiz assim - igual a resposta

function teste(numero) {

    if (numero % 2 == 0) {
        console.log('Par');
    } else {
        console.log('Ímpar')
    }

}

teste(24)
teste(5)


// Desafio Médio 1 PDF 3 - resposta - não cheguei a fazer

function verificaPalindromo(palavra) {
    const palavraMinuscula = palavra.toLowerCase();
    const tamanhoPalavra = palavraMinuscula.length;

    let palavraInvertida = "";

    for (let contador = tamanhoPalavra - 1; contador >= 0; contador = contador - 1) {
        palavraInvertida = palavraInvertida.concat(palavraMinuscula[contador])

    }

    return palavraMinuscula === palavraInvertida;

}

console.log(verificaPalindromo('Ovo'))
console.log(verificaPalindromo('chapeu'))


/*Poderia ser assim tbm
 const palindromo=palavra===palavraInvertida;

    if(palindromo){
        return true;
        
    }else{
        return false;
    }

*/

// Desafio Médio 2 PDF 3

function verificaPrimos(numero) {
    for (let contador = 1; contador <= numero; contador = contador + 1) {
        if (contador === 1 || contador === numero) {
            continue;
        }

        if (numero % contador === 0) {
            return false;
        }
    }
    return true;
}

console.log(verificaPrimos(4))
console.log(verificaPrimos(5))

/* COMO EU TAVA FAZENDO

function verificaPrimo(numero) {
    if numero>1 
}
*/

// Desafio Difícil PDF 3

//split separa digito a digito, do jeito que tá escrito, ou divide baseado em um parâmetro colocado entre as aspas
//&& as duas condições tem que ser verdadeiras

function verificaCPF(cpf) {
    const digitos = cpf.split("");

    let soma1 = 0;
    for (let contador = 0; contador <= 8; contador++) {
        const numero = parseInt(digitos[contador]);

        const modificador = 10 - contador;

        soma1 += numero * modificador;

    }

    let digitoVerificador1;
    const calculo1 = 11 - (soma1 % 11);

    if (calculo1 >= 10) {
        digitoVerificador1 = "0";
    } else {
        digitoVerificador1 = calculo1;
    }

    let soma2 = 0;
    for (let contador = 0; contador <= 9; contador++) {
        const numero = parseInt(digitos[contador]);

        const modificador = 11 - contador;

        soma2 += numero * modificador;

    }

    let digitoVerificador2;
    const calculo2 = 11 - (soma2 % 11);

    if (calculo2 >= 10) {
        digitoVerificador2 = "0";
    } else {
        digitoVerificador2 = calculo2;
    }

    return cpf[9] == digitoVerificador1 && cpf[10] == digitoVerificador2;

}

console.log(verificaCPF(""))