/**
 * Já vimos:
 * Object.keys (retorna as chaves do objeto)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 * 
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 */
const produto = {
    nome: 'Caneca',
    preco: 1.90
}
const outraCoisa = produto;
outraCoisa.preco = 2.4; // As aleterações serão nas duas cosntantes.
console.log(produto); // Ambos apontam para o mesmo valor na memória
console.log(outraCoisa); // Ambos apontam para o mesmo valor na memória

// Para que seja diferente e independente, se quisermos copiar devemos utilizar o spread operator.
const outraCoisa1 = { ...produto};
outraCoisa1.preco = 2.20;
console.log(produto);
console.log(outraCoisa1); // Agora, cada um tem o seu e cada objeto é independente.

// COPIAR as chaves e valores de um objeto utilizando o método assign:
const caneca = Object.assign({}, produto);
console.log(caneca);

// Object.keys:
console.log(Object.keys(produto)); // [ 'nome', 'preco' ]

// Object.getOwnPropertyDescriptor retorna o que defeiniríamos em definePropoerty:
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
/**
 * {
  value: 'Caneca',
  writable: true,
  enumerable: true,
  configurable: true
}
 */

// Object.value retorna os valores do objeto, sem as chaves:
console.log(Object.values(produto)); // [ 'Caneca', 2.4 ]

// Object.entries retorna as chaves e os valores separando-os em arrays:
console.log(Object.entries(produto)); // [ [ 'nome, 'Caneca' ], [ 'preco', 2.4 ] ]