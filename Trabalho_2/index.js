import promptSync from "prompt-sync";
import fs from 'fs';

import { escreverArquivo, initDatabase } from "./utils.js";
import { criarCategoria, editarCategoria, excluirCategoria, buscarPorCategoria, vizualizarCategorias } from "./categorias.js";
import { adicionarLivro, editarLivro, excluirLivro, emprestarLivro, devolverLivro, buscarPorTitulo, buscarPorAutor, buscarPorAno, visualizarLivros } from "./funcoes.js";

const prompt = promptSync();

const pathCategorias = './data/categorias.json';
const pathLivros = './data/livros.json';

initDatabase(pathCategorias);
initDatabase(pathLivros);

// TODO Validar os dados pra ele não permitir a criação da mesma categoria/... duas vezes

const categorias = JSON.parse(fs.readFileSync(pathCategorias, 'utf-8'));
const livros = JSON.parse(fs.readFileSync(pathLivros, 'utf-8'));


let executar = true;

while (executar) {

    console.log(`Escolha uma opção:

1. Adicionar Livro
2. Editar Livro
3. Excluir Livro
4. Criar Categoria
5. Editar Categoria
6. Excluir Categoria
7. Emprestar Livro
8. Devolver Livro
9. Buscar Livro por Título 
10. Buscar Livro por Autor
11. Buscar Livro por Ano
12. Buscar Livro por Categoria
13. Visualizar todos os Livros
14. Visualizar Categorias 
15. Sair
`);

    const opcao = prompt("Opção escolhida: ");

    switch (opcao) {
        // 1. Adicionar Livro  
        case "1":
            adicionarLivro(livros, categorias);
            break;
        // 2. Editar Livro
        case "2":
            editarLivro(livros);
            break;
        // 3. Excluir Livro
        case "3":
            excluirLivro(livros);
            break;
        // 4. Criar Categoria
        case "4":
            criarCategoria(categorias);
            break;
        // 5. Editar Categoria
        case "5":
            editarCategoria(categorias);
            break;
        // 6. Excluir Categoria
        case "6":
            excluirCategoria(categorias);
            break;
        // 7. Emprestar Livro
        case "7":
            emprestarLivro(livros);
            break;
        // 8. Devolver Livro
        case "8":
            devolverLivro(livros);
            break;
        // 9. Buscar Livro por Título  
        case "9":
            buscarPorTitulo(livros);
            break;
        // 10. Buscar Livro por Autor  
        case "10":
            buscarPorAutor(livros);
            break;
        //11. Buscar Livro por Ano
        case "11":
            buscarPorAno(livros);
            break;
        // 12. Buscar Livro por Categoria
        case "12":
            buscarPorCategoria(categorias);
            break;
        // 13. Visualizar todos os Livros
        case "13":
            visualizarLivros(livros);
            break;
        // 14. Visualizar Categorias 
        case "14":
            vizualizarCategorias(categorias);
            break;
        // 15. Sair
        case "15":
            executar = false;
            break;
        default:
            console.log("Opção Inválida.");
            break;
    }
}

escreverArquivo(pathCategorias, categorias);
escreverArquivo(pathLivros, livros);