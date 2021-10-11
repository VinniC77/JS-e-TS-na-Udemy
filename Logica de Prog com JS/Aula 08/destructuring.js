// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// [a, b, c] = [1, 2, 3]; // Reatribuindo os valores de a, b e c via desestruturação.

// console.log(a, b, c)

// //   índices     0  1  2  3  4  5  6  7  8
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // const primeiroNumero = numeros[0] 
// // console.log(primeiroNumero);

// // Mas podemos utilizar a desestruturação para facilitar:
// const [primeiroNumero, segundoNumero, ...restante] = numeros; // Assim, as duas variávesi criadas pegarão os valores nos índices 0 e 1 do array numeros
// console.log(primeiroNumero, segundoNumero);
// console.log(restante); // os ... guarda na variável com o nome 'restante' o resto dos itens que tem no array numeros e que não haviam sido atribuídos a nenhuma variável.

const frutas = ['banana', 'pera', 'uva', 'melancia', 'caju', 'pessego'];
const [primeiraFruta, , terceiraFruta, , quintaFruta] = frutas; // Podemos pular os índices dos arrays que não queremos.

console.log(primeiraFruta, terceiraFruta, quintaFruta);

  // índices        0          1          2
  // índices     0  1  2    0  1  2    0  1  2
const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arrays[1][2]); // para acessar número 6;

// pegando o 6 pela desestruturação:

const [, [,,seis]] = arrays; // Poe uma vírgula para pular o primeiro array, e dentro dele poe duas vírgulas para pular o índice 0 (que tem o numero 4) e o índice 1 (que tem o número 5).
console.log(seis);