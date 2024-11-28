/*
const a = [23,67,89];

console.log(a.length);

console.log(a.length)

function quadrado(num){
    return num*num;
}

const num1 = quadrado(a[0])

const tamanho = a.length;

if (tamanho>0){
    for(var contador=0;contador<tamanho;contador=contador+1){
        console.log(quadrado(a[contador]));
    }
    
}

let cont=0;

while (cont<a.length){
    console.log(quadrado(a[cont]));
    cont=cont+1
}


function stackoverflow(valoratual, alvo){
    console.log(valoratual);
    if(valoratual<alvo){
        return stackoverflow(valoratual+1, alvo)
    }
}

stackoverflow(0,1000000)
*/
//comentário

/*const a =[1,2,3,4];

for (let i=0;i<a.length;i++){
    if(i<=2){
        console.log(a[i]);
    }else {
        console.log('ok');
    }
}*/

//console.log(50%5)
/*
for(let i=0;i<=100;i++){

    if(i%15==0){
        console.log('fizzbuzz');
    }else if(i%3==0){
        console.log('fizz')
    }else if(i%5==0){
        console.log('buzz')
    }else {
        console.log(i)
    }
}*/

const hoje = new Date(2024, 2, 24);

const diaDaSemana = hoje.getDay();

switch(diaDaSemana){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira');
        break;
    case 3:
        console.log('Quarta-feira');
        break;
    case 4:
        console.log('Quinta-feira');
        break;
    case 5:
        console.log('Sexta-feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Dia desconhecido');
        break;
}
