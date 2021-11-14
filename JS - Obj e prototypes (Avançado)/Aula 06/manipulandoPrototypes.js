// Isso abaixo é a mesma coisa se usássemos a função construtora new Object:
const objA = {
    chaveA: 'A'
};

// E toda função construtora tem um Object.prototype atrelada o a ela. E que vem implicitamente numa chave chamada __proto__: Object.prototype 
// ObjA.__proto__ === Object.prototype - true;

const objB = {
    chaveB: 'B'
};
// Podemos fazer com que o prototype do objB seja o objA
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA); // A

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objC, objB);
// Agora C tem acesso ao __proto__ de B e de A, pq B tem a dele e a do A também.
console.log(objC.chaveB);
console.log(objC.chaveA);

// Isso é muito poderoso se quisermos usar, pq podemos reaproveitar códigos que estão em outros objetos.

// Exemplos com funções construtoras:
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
// Agora dentro da função, vamos criar um método para dar desconto através do prototype
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}
const produto1 = new Produto('Camiseta', 49.90);
produto1.desconto(100); // Percentual de 100% de desconto
console.log(produto1); // preço: 0. Funcionou!

// Objeto literal
const produto2 = {
    nome: 'Caneca',
    preco: 15
}

// Como fazemos para reaproveitar o método de desconto para o produto2 agora:
Object.setPrototypeOf(produto2, Produto.prototype);
produto2.desconto(10);
console.log(produto2.preco); // preço: 13,50. Funcionou!

// Criando o objeto e já setando o prototype dele
const produto3 = Object.create(Produto.prototype);
produto3.nome = 'Caneta';
produto3.preco = 2.50;
console.log(produto3);