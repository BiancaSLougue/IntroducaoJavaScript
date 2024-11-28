async function getBlogPost(id) {
    let response = await 
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            if (res.status === 200) {
                return res;
            }

            throw new Error();
        })
        .catch(err => {
            console.log(`Erro ao buscar post ${id}`);
            return undefined;
        });

    let post = await response?.json();
    console.log(post);
}