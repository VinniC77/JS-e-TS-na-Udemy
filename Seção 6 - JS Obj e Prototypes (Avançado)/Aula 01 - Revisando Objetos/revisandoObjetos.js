// Objeto Literal
const pessoa = {
//  chave    valor
    nome: 'Vinicius',
    sobrenome: 'Clunc'
}

// Acessando as chaves. Duas formas de acessar:
console.log(pessoa.nome);
console.log(pessoa['nome']);

// Outra forma de criar um objeto:
const pessoa1 = new Object();
pessoa1.nome = 'Jeferson';
pessoa1.sobrenome = 'Marcondes';
pessoa1.idade = 30;
console.log(pessoa1.sobrenome);

// Apagando uma chave de um objeto:
delete pessoa1.sobrenome;

// Podemos adicionar métodos aos objetos:
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome`);
}
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(chave) // Traz a chave
    console.log(pessoa1[chave]); // Traz o valor da chave
}

// Se precisarmos criar um objeto frequentemente, podemos criar um molde e utilizá-lo. Por exemplo, quando queremos registrar clientes de uma loja. Para criar moldes temos várias opções. Dentre elas: Factory Functions / Constructor Functions / Classes

// Factory Function:
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1 = criaPessoa('Vini', 'Clunc');
console.log(p1.nomeCompleto); // Com a palavra get não precisamos usar os parênteses, pois, o método torna-se uma propriedade.

// Constructor Function:
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Jeferson', 'Da Silva');
// A palavra new cria um objeto vazio {}, atrela a palavra this ao objeto e a retorna (como se fosse o return de uma função)
console.log(p2); // No console, além do objeto, aparece o nome do construtor Pessoa, no caso, ao dar o console.log

// Para travar um objeto e não permitir a mudança de chave ou valor:
Object.freeze(p2);

// Se quisermos travar todos os objetos a partir do molde utlizamos o Object.freeze no this, dentro da função construtora. Assim: Object.freeze(this)