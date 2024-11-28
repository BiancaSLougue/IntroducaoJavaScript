/*
import prompt from 'prompt';

prompt.start();

prompt.get(['num1','num2'],function(err,result){
    const{num1,num2}=result;
    
    const valor1 = parseInt(num1);
    const valor2 = parseInt(num2);

    console.log(valor1 + valor2);

})

function onErr(err){
    console.log(err);
    return 1;
}
*/

import prompt from 'prompt';

prompt.start();

const promptOperacao = `
Escolha uma Operação:

1. Soma
2. Subtração
3. Divisão
4.Multiplicação
`;

prompt.get([promptOperacao], function (err, result1) {
    const operacao = result1[promptOperacao];

    prompt.get(['num1', 'num2'], function (err, result2) {
        const { num1, num2 } = result2;

        const valor1 = parseInt(num1);
        const valor2 = parseInt(num2);

        try {
            switch (operacao) {
                case '1':
                    soma(valor1, valor2);
                    break;

                case '2':
                    subtrai(valor1, valor2);
                    break;
                case '3':
                    multiplica(valor1, valor2);
                    break;

                case '4':
                    divide(valor1, valor2);
                    break;

                default:
                    console.log("Operação Inválida");
                    break;

            }

        } catch (err) {
            console.log(err.message)
        }
        console.log('fim')



    });
});


function soma(a, b) {
    console.log(a + b);
}

function subtrai(a, b) {
    console.log(a - b);
}

function multiplica(a, b) {
    console.log(a * b);
}

function divide(a, b) {
    if(b===0){
        throw new Error('Não é possível dividir por 0')
    }
    console.log(a / b);
}
function onErr(err) {
    console.log(err);
    return 1;
}