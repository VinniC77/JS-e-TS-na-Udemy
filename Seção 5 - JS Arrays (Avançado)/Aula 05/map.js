// Todo método .map  retornará um array com exatamente as mesmas quantidades de elementos do array original, porém, com os valores alterados.
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Queremos o dobro de cada elemento:
const numerosMap = numeros.map(function(valor, indice, array) {
    console.log(valor, indice, array); // Tem os mesmos parametros que o .filter. O método itera sobre todos os valores e os modifica.
});
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Leticia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
];
const apenasNome = pessoas.map( obj => obj.nome);
console.log(apenasNome);

const removeNomes = pessoas.map( obj => {
    delete obj.nome
    return obj;
});
console.log(removeNomes);

// const comIds = pessoas.map((obj, indice) => { // A partir do ID 1.
//     obj.id = indice + 1;
//     return obj;
// })
// console.log(comIds);

// Para não alterar o array original, deveríamos escrever o exercício com os ID's assim:
const comIdsNew = pessoas.map((obj, indice) => {
    newObj = {...obj};
    newObj.id = indice + 1;
    return newObj;
})
console.log(comIdsNew);

console.log(pessoas); // Assim, o array com os objetos originais se mantém intacto.