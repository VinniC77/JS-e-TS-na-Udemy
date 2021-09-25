/**
 * Operadores Aritméticos
 * + Adição / Concatenação
 * - Subtração / Divisão * Multiplicação / ** Potenciação
 * % (Módulo) - Resto da divisão
 *  
 * Ordem de precedência
 * ()
 * **
 * * / %
 * + -
 * 
 * */


const num1 = 2;
const num2 = 5;
const num3 = '8';
console.log(num1 + num2); // 7 - SOMA
console.log(num1 + num3); // 28 - CONCATENAÇÃO
console.log(num2 ** num1); // 25 - POTENCIAÇÃO

// Incrementador
let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
console.log(contador)

// Decrementador
let contador1 = 10;
contador1--; // 9
contador1--; // 8
console.log(contador1);

// Incrementando com mais de um em um
const passo = 2;
let contaPraMim = 0;

contaPraMim = contaPraMim + passo;
console.log(contaPraMim);
contaPraMim = contaPraMim + passo;
console.log(contaPraMim);

// OU (melhor)

contaPraMim += passo; // Que é igual a contaPraMim = contaPramim + passo.
console.log(contaPraMim);

contaPraMim += passo; // o passo é só uma forma de passar por variável, mas podemos passar um número para ir pulando de 3 em 3, 4 em 4 e assim por diante, conforme quisermos.
// Podemos usar o +, o *, ** e etc...
console.log(contaPraMim);

// Transformando tipos de variáveis
const numero1 = 10;
const numero2 = parseInt('5'); // Convertendo string em numero inteiro
const numero3 = parseFloat('12.43'); // Para que o JS não arredonde o número e mostre as casas decimais, devemos transformar em float.
const numero4 = Number('7.77'); // Aqui o JS transforma a variável em número e traz o que tiver dentro dela, seja número inteiro ou com casas decimais
console.log(typeof numero2, numero2);
console.log(typeof numero3, numero3);
console.log(typeof numero4, numero4);