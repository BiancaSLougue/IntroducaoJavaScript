/*async function getBlogPost() {
    let response = await
        fetch('https://jsonplaceholder.typicode.com/posts/1');
    let post = await response.json();
    console.log(post);
}
getBlogPost();
*/
//?. acessa, se o response tiver valor acessa a função json, se não, retorna undefined 

/*Fácil
Crie uma função assíncrona que busque o conteúdo de
https://jsonplaceholder.typicode.com/posts/1, e em seguida, converte o valor para um objeto.
Agora modifique a função para receber um parâmetro numérico, este parâmetro será usado no
lugar do "id" do post (posts/1, sendo 1 o id).
Teste alguns valores de ids e verifique as diferenças dos retornos no console.
*/

async function BuscarConteudo() {
    let response = await
        fetch("https://jsonplaceholder.typicode.com/posts/1")

    let post = await response.json();
    console.log(post);
}

BuscarConteudo();

async function BuscarConteudo2(id) {
    let response = await
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let post = await response.json();
    console.log(post);
}
BuscarConteudo2(1);
BuscarConteudo2(2);
BuscarConteudo2(3);

//Médio
async function BuscarConteudo3(id) {
    let response = await
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .catch(err => {
                console.log(`Erro ao buscar ${id}`)
                return undefined

            })
    let post = await response?.json();
    console.log(post);
}
BuscarConteudo3(105);

//Difícil

async function getUserPosts() {
    let users = await
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(resposta => resposta.json())

    let posts = await
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(response => response.json())
    //quando eu quero gerar uma versão modificada do meu array eu uso o map
    users.map((user => {
        const currentUser = {
            id: user.id,
            username: user.username,
            email: user.email,
            posts: [],
        };

        currentUser.posts = posts.filter(post => post.userId === user.id);

        return currentUser;
    }))

}

getUserPosts();

//exemplo de função encadeada; eu não preciso salvar cada etapa em uma constante, 
//eu posso só chamar uma seguida da outra, ela sem pre vai pegar o último retorno.
const a = "abcabcabcabcabcabc"
.toUpperCase
.split('')
.filter((Letra)=>Letra==="B")
.join('')

console.log(a);