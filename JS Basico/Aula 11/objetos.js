const nome01 = 'Vini';
const sobrenome01 = 'Clunc';
const idade01 = 20;

const nome02 = 'Jessica';
const sorbenome02 = 'Da Silva';
const idade02 = 23;

// Ao invés de fazer assim, podemos criar objetos:

const pessoa01 = {
    nome: 'Vini',
    sobrenome: 'Clunc',
    idade: 22
};

const pessoa02 = {
    nome: 'Jessica',
    sobrenome: 'Da Silva',
    idade: 21
};

console.log(pessoa02);
console.log(pessoa01.nome);

// Podemos criar uma função que crie objetos assim:

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
// Essa mesma função pode ser escrita de forma mais resumida:

function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade } // Não precisamos escrever nome: nome, sobrenome: sobrenome e etc... Se escreveremos dessa maneira o JS interpreta automaticamente.
}

const novaPessoa = criarPessoa('Vinicius', 'Da Silva', 32)
console.log(novaPessoa);

// Mas também podemos crirar funções (métodos) dentro dos objetos:

const eu = {
    nome: 'Carlos',
    sobrenome: 'Teixeira',
    idade: 33,
    // Vamos criar um método que fará com que a pessoa fale seu nome, sobrenome e idade:

    fala() { // Não precisamos da palavra "function" nesse caso
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`)
        // a palavra reservada "this" serve para os referirmos ao objeto "eu" dentro do método.
    },
        // Vamos criar um método para aumentar a idade
    incrementaIdade() { // A cada "ano" o método incrementaIdade aumenta 1.
        ++this.idade
    }
}

eu.fala();
eu.incrementaIdade();
eu.fala();

eu.incrementaIdade();
eu.fala();