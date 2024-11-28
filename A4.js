/*function logaItens (...params) {
    const´[primeiro]=params;
    console.log(primeiro)
}

function logaNome(user){
    const name=user.name;

    console.log(asbdsh)
}

logaNome({name:"Teste"})

logaItens(6,2,3,45)*/

/*function logaSegundo(elementos) {
    const [ primeiro, segundo]=elementos;

    console.log(segundo);
}

logaSegundo([1,2,3,4])

function LogaSegundo(elementos) {
    const [ ]=elementos;

    console.log();
}

LogaSegundo([1,2,3,4])*/

/*console.log('antes')

setTimeout (() =>{
console.log('ok')
},2500)

console.log('depois')*/

//função assincrona - postman cliente http
// usado nos casos de login, uma delas não pode ser executada sem ter o resultado do outro antes

/*async function logAssincrono() {
    console.log('antes')

    await new Promise(function(resolve, reject) {
        setTimeout (() =>{
            console.log('ok')
            resolve(true);
            },2500)
    })

    
    console.log('depois')
}

logAssincrono() */

// npm é um gerenciador de pacotes do node

import prompt from 'prompt';

prompt.start();

prompt.get(['num1','num2',function(err,result){
    const{num1,num2}=result;
    
    const valor1 = parseInt(num1);
    const valor2 = parseInt(num2);

    console.log(valor1 + valor2);

}])

function onErr(err){
    console.log(err);
    return 1;
}