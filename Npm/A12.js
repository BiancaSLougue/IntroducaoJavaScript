import PromptSync from "prompt-sync";
import fs from 'fs';

import 

const prompt = promptSync();

const pathCategorias = './data/categorias.json';



const pathLivros = "./itens.json";

const itens = JSON.parse(fs.readFileSync(path, 'utf-8'));
itens.push(6)
console.log(itens);
const conteudo = JSON.stringify(itens);
//toda vez que eu leio eu tenho que dar um parse, toda vez que eu escrevo eu uso um stringfy
fs.writeFileSync(path, conteudo);