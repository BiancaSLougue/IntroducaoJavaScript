// Desafio Fácil 1 PDF 6 - Crie a classe veículo com os seguintes atributos:: Marca, Modelo, Ano, Cor, e as funções Buzinar

class Veiculo {
    //aqui eu digo quais vão ser os atributos que essa classe tem
    marca;
    modelo;
    ano;
    cor;


    constructor(marca, modelo, ano, cor) {
        //aqui eu to atribuindo valor pro atributo
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    buzinar() {
        console.log(`O ${this.modelo} buzinou.`) //crase interpola 
    }

    static info() { // só pra demonstrar uma função estática
        console.log("Essa classe representa um veículo genérico")
    }

}

const carro = new Veiculo("Fiat", "Siena", 2008, "Branca");

Veiculo.info();

console.log(typeof carro) // pra ver qual é o tipo
console.log(typeof "")
console.log(carro);

carro.buzinar();



// Desafio Fácil 2 PDF 6 - Crie a classe "Retangulo" com a função estática "calcularArea"

//classes ou funções que só servem pra me trazer um valor
class Retangulo{
    static calcularArea(base, altura){
        return base*altura;
    }
}

console.log(Retangulo.calcularArea(2,3));

//Como eu tinha feito, não vi 
class Retangulo2 {
    base;
    altura;

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        console.log(this.base * this.altura);
    }

}


const input = new Retangulo2(3, 2);

input.calcularArea() //tem que colocar o input e não retangulo pq essa função tá referenciada dentro da classe e não é estática

// Desafio Médio 1 PDF 6 - Crie a classe "ContaBancaria" com os seguintes atributos: Número, Saldo, e as funções: Sacar, Depositar, Ver Saldo

// COMO EU FIZ
class ContaBancaria {
    numero;
    #saldo;

    constructor(numero, saldo) {
        this.numero = numero;
        this.#saldo = saldo;
    }

    sacar(valor1) {
        if(valor1<=this.#saldo){
            this.#saldo-=valor1;
        console.log(`R$${valor1},00 foram sacados.`)
        }else{
            console.log(`Saldo insuficiente.`)
        }
    }

    depositar(valor2) {
        this.#saldo+=valor2;
        console.log(`R$${valor2},00 foram depositados.`)
    }

    verSaldo() {
        console.log(`O valor do saldo é de R$${this.#saldo},00.`)
    }
}

const conta = new ContaBancaria(18188, 1800);

conta.sacar(400);
conta.depositar(500);
conta.verSaldo();

console.log(conta.numero); 

// RESOLUÇÂO no whats



// Desafio Médio 2 PDF 6 - Crie uma classe Pessoa com os seguintes atributos: Nome, Idade, Sexo

class Pessoa {
    #nome;
    #idade;
    #sexo;

    constructor(nome, idade, sexo) {
        this.#nome = nome;
        this.#idade = idade;
        this.#idade = sexo;
    }

    // Desafio Médio 3 PDF 6 - Crie funções para definir e visualizar cada um dos atributos.

    definirNome(Nome){
        this.#nome=Nome;
        console.log(`O nome do aluno é ${this.#nome}.`);
    }

    definirIdade(Idade){
        this.#idade=Idade;
        console.log(`O aluno tem ${this.#idade} anos.`);
    }

    definirSexo(Sexo){
        this.#sexo=Sexo;
        if(this.#sexo==="F"){
            console.log("É uma aluna.")
        }else{
            console.log("É um aluno.")
        }
    }

}

const Pessoa1 = new Pessoa

Pessoa1.definirNome("Bianca")
Pessoa1.definirIdade(30);
Pessoa1.definirSexo("F");

// RESOLUÇÂO



// Desafio Difícil 1 PDF 6 - Crie a classe Animal com a função "falar" ; Crie a classe Cachorro que estende a classe Animal; Sobrescreva a função "falar" de cachorro para retornar "latido"

class Animal{

    constructor(nome){
        this.nome=nome;
    }

    falar(){
        console.log(`${this.nome} faz tal barulho.`);
    }
    
}

class Cachorro extends Animal{
    constructor(nome,raca){
        super(nome);
        this.raca = raca;
    }

    falar(){
        console.log(`O ${this.nome} late.`);
    }
}

const dog = new Cachorro("Zeus", "Pastor")
dog.falar()