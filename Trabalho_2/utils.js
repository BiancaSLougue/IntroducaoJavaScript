
import fs from 'fs';

export function initDatabase(caminho) {
    const arquivoExiste = fs.existsSync(caminho);

    if (!arquivoExiste) {
        const conteudo = JSON.stringify({
            ultimoId: 1,
            dados: []
        });

        fs.writeFileSync(caminho, conteudo);
    }
}

export function lerArquivo(caminho) {
    const conteudo = fs.readFileSync(caminho, 'utf-8');

    return JSON.parse(conteudo);
}

export function escreverArquivo(caminho, conteudo) {
    const texto = JSON.stringify(conteudo);

    fs.writeFileSync(caminho, texto);
}

export function idsParaCategorias(livros, categorias) {
    livros.dados.array.forEach(livro => {
        livro.categorias = livro.categorias.map(id => {
            return categorias.dados.find(categoria => categoria.id === id)
        })
            .filter(categoria => !!categoria)
    });
}

export function categoriasParaIds(livros) {
    livros.dados.forEach(livro => {
        livro.categorias = livro.categorias.map(categoria => categoria.id);
    })
}