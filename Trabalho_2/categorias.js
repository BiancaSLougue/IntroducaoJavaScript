import promptSync from "prompt-sync";

const prompt = promptSync();

// 4. Criar Categoria
export function criarCategoria(categorias) {
    const nome = prompt("Insira o nome da categoria: ");

    const categoria = {
        id: categorias.ultimoId,
        nome: nome
    }

    categorias.dados.push(categoria);
    categorias.ultimoId = categorias.ultimoId + 1;
}

// 5. Editar Categoria
export function editarCategoria(categorias) {
    const id = parseInt(prompt("Insira o id da categoria a ser editada: "));
    const categoria = categorias.dados.find(i => i.id === id);

    if (categoria) {
        categoria.nome = prompt("Insira novo nome da categoria: ", { value: categorias.nome });
    } else {
        console.log("Categoria não encontrada, id inválido.");
    }
}

// 6. Excluir Categoria
export function excluirCategoria(categorias) {
    const id = parseInt(prompt("Insira o id da categoria a ser excluída: "));
    const index = categorias.dados.findIndex(i => i.id === id);

    if (index >= 0) {
        categorias.dados.splice(index, 1);
    } else {
        console.log("Categoria não encontrada, id inválido.");
    }
}

// 12. Buscar Livro por Categoria
export function buscarPorCategoria(categorias) {
    const categoria = prompt("Insira o nome da categoria procurada: ");
    const livrosEncontrados = categorias.dados.filter(function (livro) {
        return livro.nome.toLowerCase().indexOf(categoria.toLowerCase()) >= 0;
    })
    if (livrosEncontrados) {
        console.table(livrosEncontrados);
    } else {
        console.log("Esta categoria não existe.");
    }
}

//
export function buscarCategoria(categorias, nome) {
    return categorias.dados.find(function (livro) {
        return livro.nome.toLowerCase() === nome.toLowerCase();
    })
    
}

// 14. Visualizar Categorias 
export function vizualizarCategorias(categorias) {
    console.table(categorias.dados);
}