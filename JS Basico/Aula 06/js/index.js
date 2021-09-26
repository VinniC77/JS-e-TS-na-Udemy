let num1 = 100; // number;
let num2 = 2.333242; // number;

console.log(num1.toString() + num2); // para transformar o número em string TEMPORARIAMENTE. Não altera a variável.

console.log(num1.toString(2)); // Trás a representação binária do número: 1100100

console.log(num2.toFixed(2)); // Colocando casas decimais no número. No caso, 2.

console.log(Number.isInteger(num2)); // Para saber se um numero é inteiro ou não.

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // Verifica se a variável entre paranteses é um NaN. Not A Number. Retorna um bool