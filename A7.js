//Desafio Fácil 1 PDF 5 - Crie um objeto "carro" com os seguintes com os seguintes atributos: Marca, Modelo, Ano, Cor, Ligado

let carro = {
    marca: "Fiat",
    modelo: "Siena 1.4",
    ano: 2008,
    cor: "branco",
    estaLigado: false,
//Desafio Fácil 3 PDF 5 - Crie uma função para ligar o carro, e outra para desligar
    ligar: function(){
        return this.estaLigado = true
    },
    desligar: function(){
        return this.estaLigado = false
    }
};

console.log(carro.ligar());
console.log(carro.desligar());


//Desafio Fácil 2 PDF 5 - Crie uma função que retorna a marca do carro

function retornaMarca (){
    numero = carro.marca

    return numero;
}

console.log(retornaMarca());

// deu certo, mas pode dar undefined pq a minha função pode eventualmente modificar o valor, está conceitualmente errado
// pode ser feito tb colocando dentro da declaração do desafio 1 

//Jeito mais correto de se fazer abaixo

function retornaMarca2 (){
   return carro.marca
}

console.log(retornaMarca2());

//Desafio Médio 1 PDF 5 - Crie três objetos "livro", com os seguintes atributos: Título, Autor, Ano


var livro1 = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
};
var livro2 = {
    titulo: "Violetas na Janela",
    autor: "Vera Lúcia Marinzeck de Carvalho",
    ano: 1993,
};
var livro3 = {
    titulo: "Tudo Passa",
    autor: "Vera Lúcia Marinzeck de Carvalho",
    ano: 2022,
};

//Desafio Médio 2 PDF 5 - Crie uma função que recebe dois livros, e verifica se eles são do mesmo autor

function verificaAutores(LivroA, LivroB){

       
    if(livro1.autor === livro2.autor){
        console.log("Os livros tem o mesmo autor.");
    }else{
        console.log("Os livros não tem o mesmo autor.");
    }

}

verificaAutores(livro1, livro2)

// RESPOSTA
function verificaMesmoAutor(LivroA, LivroB){
    return LivroA.autor == LivroB.autor;
}

console.log(verificaMesmoAutor(livro1, livro2))
console.log(verificaMesmoAutor(livro2, livro3))

//Desafio Médio 3 PDF 5 -  Crie uma função chamada descrever , que retorna as informações do livro no seguinte formato: "O livro [titulo] foi escrito por [autor] no ano de [ano]"

const livro4 = {
    titulo: "Violetas na Janela",
    autor: "Vera Lúcia Marinzeck de Carvalho",
    ano: 1993,
    descrever: function(){
        return "O livro " +this.titulo+ " foi escrito por " +this.autor+ " no ano de " +this.ano+".";
    }
}

console.log(livro4.descrever())

//  RESPOSTA

livro1.descrever = descreveLivro;
livro2.descrever = descreveLivro;
livro3.descrever = descreveLivro;

function descreveLivro(){
    return "O livro " +this.titulo+ " foi escrito por " +this.autor+ " no ano de " +this.ano+".";
}

console.log(livro1.descrever())


//Desafio Difícil 1 PDF 5 - Crie um objeto turma com os seguintes atributos: Nome, Turno, Alunos

var turma = {
    nome:"JavaScript 3000 Talentos",
    turno:"Noite",
    alunos:[],
};

turma.alunos.push({
    nome: "Bianca",
    idade: 30,
});

turma.alunos.push({
    nome: "Wagner",
    idade: 33,
});

turma.alunos.push({
    nome: "Elizabete",
    idade: 54,
});

// Outro jeito de fazer
const aluno1 = {
    nome: "Bianca",
    idade: 30,
}

const aluno2 = [{
    nome: "Wagner",
    idade: 33,
}, {
    nome: "Elizabete",
    idade: 54,
}];

turma.alunos.push(aluno1, ...aluno2);

console.log(turma);

//isso é um exemplo de chamada de funções encadeadas
function retornaNomesAlunos(turma){
    //.map passa por todos os itens do array, modifica e retorna
    turma.alunos.map((aluno) =>{
        return aluno.nome;
    }).join(", ");
}

//um objeto pode ter atributos e funções, quando tu quer chamar a função de um objeto coloca . e a função (Ex: .alunos, .map) 

console.log(turma);
console.log(retornaNomesAlunos(turma));
console.log("texto teste".split ("@").join(" "))


//Desafio Difícil 2 PDF 5 - Insira 3 alunos na turma, os alunos devem ter os seguintes atributos: Nome, Idade



//Desafio Difícil 3 PDF 5 - Crie uma função que retorna os nomes dos alunos da turma
//Desafio Difícil 4 PDF 5 -  Crie uma função que retorna a média das idades dos alunos da turma

function buscaIdade(aluno){
    return aluno.idade;
}
function retornaMediaIdades(turma){
    const contagemAlunos = turma.alunos.length;
    let soma=0;

    for(let contador=0; contador<contagemAlunos; contador=contador+1){
        soma=soma+turma.alunos[contador.idade];
    }
    
    return soma/contagemAlunos;
}

console.log(retornaNomesAlunos(turma));
console.log(retornaMediaIdades(aluno))