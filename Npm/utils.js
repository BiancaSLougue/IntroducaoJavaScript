
import fs from 'fs';

export function initCategorias(caminho){
    const arquivoExiste = fs.existsSync(caminho);

    if(!arquivoExiste){
        const conteudo = JSON.stringify({
            ultimoId: 1,
            dados: [] 
        });

        fs.writeFileSync(caminho, conteudo);
    }
}