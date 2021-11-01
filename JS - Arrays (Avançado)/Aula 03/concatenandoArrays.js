const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9, 'Marcondes']);
console.log(a3);

// Outra maneira de fazer concatenação de arrays é através do spread operator ...
const a4 = [...a1, ...a2, ...[7, 8, 9]];
console.log(a4);

// O Spread Operator também pode ser utilizado com objetos.