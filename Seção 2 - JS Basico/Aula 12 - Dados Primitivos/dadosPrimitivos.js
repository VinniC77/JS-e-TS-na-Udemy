/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
 * 
 * Referência (mutável) - array, object, function - Valores passados por referência
 */

let a = 'Vini';
let b = a;

console.log(a, b); // Vini Vini
a = 'Clunc';
console.log(a, b); // Clunc Vini

// Mesmo depois de alterado o valor de "a", a variável(string) "b"(que havia recebido o valor de "a" não foi alterada, pois, foi feita uma cópia)

let aa = [1, 2, 3];
let bb = aa;
console.log(aa, bb); // [1, 2, 3] [1, 2, 3]

aa.push(4);
console.log(aa, bb); // [1, 2, 3, 4] [1, 2, 3, 4]

// Ambas as variáves(arrays) foram alteradas, pois, os valores são passados por referência. Não é uma simples cópia e sim o mesmo apontamento na memória.

bb.push(5);
console.log(aa, bb); // [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]

// Exemplo com um objeto

const x = {
    nome: 'Vini',
    sobrenome: 'Clunc'
}

const y = x;

console.log(y);
y.nome = 'Jeferson';
console.log(x);