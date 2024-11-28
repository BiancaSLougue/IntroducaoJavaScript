// TRABALHO 1 - BIANCA DE SOUZA LOUGUE

var livros = [
    {
        id: 1,
        titulo: "Violetas na Janela",
        autor: "Vera Lucia Marinzeck de Carvalho",
        ano: 1981,
        emprestado: false,
    },
]


function adicionaLivro(id, titulo, autor, ano) {

    const livro = {
        id,
        titulo,
        autor,
        ano,
        emprestado: false,
    }

    if (livros.find(function (livro) { return livro.id === id })) {
        return "Livro não adicionado, esta numeração de id não está disponível."
    } else {
        livros.push(livro)
        return livros
    }
}

console.log("Item 1");
console.log(adicionaLivro(2, "Dom Casmurro", "Machado de Assis", 1899));


function adicionaLivros(novoslivros) {
    novoslivros.forEach(novolivro => {
        adicionaLivro(novolivro.id, novolivro.titulo, novolivro.autor, novolivro.ano)
    });
    return livros;
}

console.log("Item 1.1");
console.log(adicionaLivros([
    { id: 3, titulo: "1984", autor: "George Orwell", ano: 1949 },
    { id: 4, titulo: "To Kill a Mockingbird", autor: "Harper Lee", ano: 1960 },
    { id: 5, titulo: "The Great Gatsby", autor: "F. Scott Fitzgerald", ano: 1925 },
    { id: 6, titulo: "The Catcher in the Rye", autor: "J.D. Salinger", ano: 1951 },
    { id: 7, titulo: "Pride and Prejudice", autor: "Jane Austen", ano: 1813 },
    { id: 8, titulo: "Violetas na Janela - Sempre ao Seu Lado", autor: "Vera Lucia Marinzeck de Carvalho", ano: 1996 },
    { id: 9, titulo: "À Espera de um Milagre", autor: "Stephen King", ano: 1996 },
    { id: 10, titulo: "Despertar: O Guia para Uma Vida de Sonhos", autor: "Deepak Chopra", ano: 1996 },
]));


function removeLivro(id) {

    const item = livros.find(i => i.id === id);
    const index = livros.indexOf(item);

    const novo = [];

    for (let i = 0; i < livros.length; i++) {
        if (i !== index) {
            novo.push(livros[i]);
        }
    }

    livros = novo;

    return livros;

}

console.log("Item 2");
console.log(removeLivro(2));


function removeLivros(novoslivros) {
    novoslivros.forEach(novolivro => {
        removeLivro(novolivro.id, novolivro.titulo, novolivro.autor, novolivro.ano)
    });
    return livros;
}

console.log("Item 2.1");
console.log(removeLivros([
    { id: 5, titulo: "The Great Gatsby", autor: "F. Scott Fitzgerald", ano: 1925 },
    { id: 7, titulo: "Pride and Prejudice", autor: "Jane Austen", ano: 1813 }
]));


function pesquisaPorTitulo(titulo) {
    return livros.filter(function (livro) {
        return livro.titulo.toLowerCase().indexOf(titulo.toLowerCase()) >= 0;

    })
}

console.log("Item 3 - Título");
console.log(pesquisaPorTitulo("Violetas na Janela"));


function pesquisaPorAutor(autor) {
    return livros.filter(function (livro) {
        return livro.autor.toLowerCase().indexOf(autor.toLowerCase()) >= 0;

    })
}

console.log("Item 3 - Autor")
console.log(pesquisaPorAutor("Vera Lucia Marinzeck de Carvalho"));

function pesquisaPorAno(ano) {
    return livros.filter(function (livro) {
        return livro.ano === ano;
    })
}

console.log("Item 3 - Ano");
console.log(pesquisaPorAno(1996));


function listaLivros() {
    console.table(livros);
}

console.log("Item 4");
listaLivros();


function emprestarLivro(id) {
    let livro = livros.find(function (livro) {
        return livro.id === id;
    });
    if (livro) {
        if (livro.emprestado === false) {
            livro.emprestado = true;
            console.log("O livro foi emprestado com sucesso.");
        } else {
            console.log("O livro não está disponível no momento.");
        }
    } else {
        console.log("Número de id inválido, o livro não existe.");
    }
}

console.log("Item 5");
emprestarLivro(8);
console.log(livros[4]);
emprestarLivro(8);
emprestarLivro(15);


function devolverLivro(id) {
    let livro = livros.find(function (livro) {
        return livro.id === id;
    })
    if (livro) {
        if (livro.emprestado === true) {
            livro.emprestado = false;
            console.log("O livro foi devolvido com sucesso.");
        } else {
            console.log("Este livro não está emprestado.");
        }
    } else {
        console.log("Número de id inválido, o livro não existe.");
    }
}

console.log("Item 6");
devolverLivro(8);
console.log(livros[4]);
devolverLivro(1);
devolverLivro(15);