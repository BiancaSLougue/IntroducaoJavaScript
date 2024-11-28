const veiculo = {
    marca: "Fiat",
    modelo: "Siena 1.4",
    ano: 2008,
    cor: "branco",
    estaLigado: false,
    retornaMarca
};

function retornaMarca(){
    return this.marca;
}

veiculo.retornaMarca = retornaMarca;

function retornaMarca(){
    return this.marca;
}

//Ctrl; comenta tudo
function ligaOuDesligaVeiculo(Ligado){
    this.estaLigado = Ligado;
}

veiculo.ligaOuDesligaVeiculo = ligaOuDesligaVeiculo;

veiculo.ligaOuDesligaVeiculo(true);

console.log(veiculo);

veiculo.ligaOuDesligaVeiculo(false);

console.log(veiculo);