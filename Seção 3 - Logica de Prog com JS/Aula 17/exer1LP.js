// Escreva uma função que recebe 2 números e retorno o maior deles.

function maiorOuMenor(a, b) {
    if (a > b) {
        console.log(`O número ${a} é maior do que ${b}`);
    } else {
        console.log(`O número ${b} é maior do que ${a}`);
    }
}
maiorOuMenor(1, 8);

// Resolução do professor:
function max(x, y) {
    return x > y ? x : y;
}
console.log(max(10,20));

// Mesma função com arrow function e operador ternário:
const max2 = (x, y) =>  x > y ? x : y; // Coisa linda!!!
console.log(max2(2, 7));