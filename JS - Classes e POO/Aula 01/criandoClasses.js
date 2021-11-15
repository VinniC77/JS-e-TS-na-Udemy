// Classes é a mesma coisa que a função construtora. Ambas fazem a mesma coisa.
// Criando uma classe:

class Pessoa { // usar a palavra reservada class e a primeira letra maiúscula para o nome da classe.
    constructor(nome, sobrenome) { // Usar o método construtor.
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // A vantagem de utilizar classes é que os métodos são criados diretamente nos prototypes da Pessoa, sem a necessidade/complexidade de linkar isso posteriormente, como no caso das factory functions.
    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

// Instanciando(criando) um objeto pessoa atavés da classe(molde) Pessoa:
const pessoa = new Pessoa('Maria', 'Da Silva');


// Fazendo a mesma coisa com uma factory function:
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const pessoa2 = new Pessoa2('Maria', 'Da Silva');

console.log(pessoa);
console.log(pessoa2);