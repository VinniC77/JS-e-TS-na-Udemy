const pessoa = {
    nome: 'Jeferson',
    sobrenome: 'Marcondes',
    idade: 29,
    endereco: {
        rua: 'Dos Andradas',
        numero: 232
    }
}

console.log(pessoa.nome);

const { sobrenome } = pessoa; // Atribuição via desestruturação.
// Como exiete um atributo sobrenome dentro de pessoa, a criação da variável via desestruturação irá receber esse valor.

console.log(sobrenome);

// Também podemos criar uma variável com outro nome diferente do atributo:

const { idade: qtdDeAnos } = pessoa;

console.log(qtdDeAnos);