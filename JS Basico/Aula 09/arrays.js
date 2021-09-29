// Arrays

const alunos = ['Vini', 'Maria', 'Daiane', 'Jessica'];

console.log(alunos[0]);

alunos[0] = 'Carlos'; // Se o indice já existe, ele altera o valor do indice do array
alunos[3] = 'Marta'; // Se o indice não existe, ele adiciona 

// console.log(alunos);

alunos[alunos.length] = 'Jeferson'; // Se não sabemos o tamanho do array e quisermos adicionar um elemento no final, fazemos desta maneira.

alunos[alunos.length] = 'Juliana';

alunos.push('Vinicius'); // Mas para adicionar um elemento no final de um array, exite uma funcção para isso. O PUSH

alunos.unshift('Fabio'); // Adiciona o elemento no começo do array, ao contrario do push que adiciona no final.

const removido = alunos.pop(); // Elimina o ultimo registro do array. No caso o Vinicius.

const removidoNoComeco = alunos.shift(); // Elimina o ultumo registro e dá possibilidade de armazenar em uma variável.

delete alunos[1]; // Elimina o valor, mas não altera nem elimina o indice. Deixa o indice sem valor (undefined)

console.log(alunos.slice(0, 3)); // Corta o array, mas conta os valores, não os indices

console.log(alunos);
console.log(removido);
console.log(removidoNoComeco);
console.log(alunos[1]);