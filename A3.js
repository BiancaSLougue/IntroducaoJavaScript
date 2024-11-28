const a = 2;

const b = 8;

function Soma(num1 , num2){
    return num1 + num2
};

function Subt(num1 , num2){
    return num1 - num2
};

function Mult(num1 , num2){
    return num1 * num2
};

function Div(num1 , num2){
    return num1 / num2
};

console.log(Soma(a,b))

console.log(Subt(a,b))

console.log(Mult(a,b))

console.log(Div(a,b))


/*const c = [1 , 2 , 3];

function ValorC(num1,num2,num3) {
    for (let i = 0; i < c.length; i = i + 1 ) {
        return num1+num2
               
       } 
}

const palavra = ['babado']

palavra.findIndex()*/

function somaValoresArray(arr) {
    let acumulador = 0;

    //try {
        for(let i=0; i <arr.length; i++){
            acumulador +=arr[i];
    }

    //}catch (err){}

        return acumulador;
}

let c;
let d = [1,2,3,4]

console.log(somaValoresArray(c));
console.log(somaValoresArray(d));

//Jeito Difícil
function buscaLetra(palavra , letra){
    for (let i=0; i<palavra.length; i++){
        const letraAtual = palavra[i];

        if(letraAtual == letra){
            return i;
        }
    }
}

console.log(buscaLetra("batata arroz peixe","arroz"));

//Jeito Fácil
console.log("batata arroz peixe".indexOf("arroz"));


console.log("ALARMANTE".toLowerCase())

function contaLetras(palavra){
    const letras = {};

    for(let j=0; j<palavra.length; j++){
        const letra=palavra[i];

        const contador = letras[letra];

        if(contador==undefined){
            letras[letra]=1;
        } else {
            letras[letra]+=1;
        }
    }
    return letras;
}

console.log(contaLetras("paralelepipedo"))