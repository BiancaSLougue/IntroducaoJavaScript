import promptSync from "prompt-sync";
import fs from 'fs';

import { categoriasParaIds, idsParaCategorias } from "./utils.js";
import { buscarCategoria } from './categorias.js'

const prompt = promptSync();

//como remover um item de um array java script de acordo com a posição findIndex

// 1. Adicionar Livro
export function adicionarLivro(livros, categorias) {

    const titulo = prompt("Insira o título do livro: ");
    const autor = prompt("Insira o autor do livro: ");
    const ano = prompt("Insira o ano do livro: ");
    const categoriasLivro = prompt("Insira as categorias separadas pro vírgula: ")
        .split(",")
        .map(nome => nome.trim())
        .filter(nome => !!nome)
        .map(nome => buscarCategoria(categorias, nome))
        .filter(categoria => !!categoria);

    const livro = {
        id: livros.ultimoId,
        titulo: titulo,
        autor: autor,
        ano: ano,
        emprestado: false,
        categoria: categoriasLivro,
    }

    livros.dados.push(livro);
    livros.ultimoId = livros.ultimoId + 1;
}

// 2. Editar Livro
export function editarLivro(livros) {
    const id = parseInt(prompt("Insira o id do livro a ser editado: "));
    const livro = livros.dados.find(t => t.id === id);

    if (livro) {
        livro.titulo = prompt("Insira o novo título: ", { value: livro.titulo });
        livro.autor = prompt("Insira o novo autor: ", { value: livro.autor });
        livro.ano = prompt("Insira o novo ano: ", { value: livro.ano });
        const categoria = prompt("Insira as categorias separadas pro vírgula: ", { value: livro.ano });
        livro.categoria = categoria.categoriasParaIds;
    } else {
        console.log("Este número de id não é válido.")
    }
}

// 3. Excluir Livro
export function excluirLivro(livros) {
    const id = parseInt(prompt("Insira o id do livro a ser excluído: "));

    const item = livros.dados.find(i => i.id === id);//poderia usar finIndex direto
    const index = livros.dados.indexOf(item);

    if (index >= 0) {
        livros.dados.splice(index, 1);
    }else{
        console
    }
}

// 7. Emprestar Livro
export function emprestarLivro(livros) {
    const id = parseInt(prompt("Insira o id do livro a ser emprestado: "));

    const livro = livros.dados.find(i => i.id === id);

    if (livro) {
        if (livro.emprestado === false) {
            livro.emprestado = true;
        } else {
            console.log("Este livro não está emprestado.");
        }
    } else {
        console.log("Este livro não existe, id inválido.");
    }
}

// 8. Devolver Livro
export function devolverLivro(livros) {
    const id = parseInt(prompt("Insira o id do livro a ser devolvido: "));
    const livro = livros.dados.find(i => i.id === id);

    if (livro) {
        if (livro.emprestado === true) {
            livro.emprestado = false;
        } else {
            console.log("O livro não está emprestado.");
        }
    } else {
        console.log("Este livro não existe, id inválido.")
    }
}

// 9. Buscar Livro por Título
export function buscarPorTitulo(livros) {
    const titulo = prompt("Insira o título do livro a ser buscado: ");
    const livrosEncontrados = livros.dados.filter(function (livro) {
        return livro.titulo.toLowerCase().indexOf(titulo.toLowerCase()) >= 0;
    })
    if (livrosEncontrados) {
        console.table(livrosEncontrados);
    } else {
        console.log("Este título não foi encontrado.");
    }
}

// 10. Buscar Livro por Autor
export function buscarPorAutor(livros) {
    const autor = prompt("Insira o nome do autor a ser buscado: ");
    const autorEncontrado = livros.dados.filter(function (livro) {
        return livro.autor.toLowerCase().indexOf(autor.toLowerCase()) >= 0;
    })
    if (autorEncontrado) {
        console.table(autorEncontrado);
    } else {
        console.log("Autor não encontrado.");
    }
}

// 11. Buscar Livro por Ano
export function buscarPorAno(livros) {
    const ano = parseInt(prompt("Insira o ano a ser buscado: "));
    const anoEncontrado = livros.dados.filter(function (livro) {
        return livro.ano.indexOf(ano) >= 0;
    })
    if (anoEncontrado) {
        console.table(anoEncontrado);
    } else {
        console.log("Ano não encontrado.");
    }
}

// 13. Visualizar todos os Livros
export function visualizarLivros(livros) {
    console.table(livros.dados);
}