// For In lê  os índices do array ou chaves do objeto.
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i in frutas) { 
    console.log(frutas[i]);
}

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

const pessoa = {
    nome: 'Monica',
    sobrenome: 'Da Silva',
    idade: 22
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}