// Prototypes é a base que o JS utiliza para trabalhar com herança e POO.

// Revisão
// Construtora -> molde para gerar vários objetos (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}

// Instancia - É quando criamos um objeto a partir do molde ou da função construtora
const pessoa1 = new Pessoa('Jeferson', 'Mailai'); // <- Pessoa = Função construtora

console.log(pessoa1);
console.log(pessoa1.nomeCompleto());

console.log(Pessoa.prototype === pessoa1.__proto__); // true;
// Sempre que um objeto é criado a partir de uma classe, o JS cria automaticamente um proto(prototype). Acessando esse prototype e criando coisas nele, não é necessário que o método nomeCompleto() seja criado em todo o objeto criado a partir de Pessoa. Pois, ele estará criado na raiz, ou seja, no prototype.

Pessoa.prototype.nomeCompleto = function() {
    this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;
}
// Mas se tivermos dois métodos com o mesmo nome no prototype e na função construtora, o JS vai buscar o método antes na função construtora e não no pai (que seria o __proto__)

// Hierarquia de onde o JS vai buscar os métodos primeiro nesse caso:
// pessoa1 -> Pessoa.prototype -> Object.prototype