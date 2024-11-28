import promptSync from "prompt-sync";
import fs from 'fs';

import { escreverArquivo, initDatabase } from "./utils.js";
import { criarCategoria } from "./categorias.js";

const prompt = promptSync();

const pathCategorias = './data/categorias.json';
const pathLivros = './data/livros.json';

initDatabase(pathCategorias);
initDatabase(pathLivros);

const categorias = JSON.parse(fs.readFileSync(pathCategorias, 'utf-8'));
const livros = JSON.parse(fs.readFileSync(pathLivros, 'utf-8'));

let executar = true;

while (executar) {
    console.log(`Escolha uma opção:

    1. Criar categoria`);
    const opcao = prompt("Opção escolhida: ");

    switch (opcao) {
        case "1":
            criarCategoria(categorias);
            break;

        default:
            executar = false;
            break;
    }
}


escreverArquivo(pathCategorias, categorias);
escreverArquivo(pathLivros, livros);