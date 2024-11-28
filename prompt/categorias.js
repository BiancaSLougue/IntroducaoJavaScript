import promptSync from "prompt-sync";

const prompt = promptSync();

export function criarCategoria(categorias) {
    const nome = prompt("Insira o nome da categoria: ");

    const categoria = {
        id: categorias.ultimoId,
        nome: nome
    }

    categorias.dados.push(categoria);
    categorias.ultimoId = categorias.ultimoId + 1;
}