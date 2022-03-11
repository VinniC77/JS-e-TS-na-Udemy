// Faz o que pop, shift, unshift, push faz também e mais algumas coisas
// Esse método mexe no array original

// Indices       -5       -4       -3        -2         -1
// Indices        0        1        2         3          4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(indice que começa a mudança, qtd, elem1, elem2, elem3) - no 1 argumento é o indice que queremos começar a mexer, o 2 argumento é quantos elementos eu quero remover do meu array. E a partir do 3 parametro, os elementos que quero adicionar no array.

// Simulando o método pop(), ou seja, exlcuir o úlitmo elemento do array:
const removidos = nomes.splice(4, 1); // Quero remover a parti do indice 4, 1 elemento.
// Também podemos armazenar o elemento em uma variável, porém, ao contrário do pop() que armazena uma string, o splice armazena um array
console.log(nomes, removidos);

const troca = nomes.splice(3, 1, 'Luiz'); // Quero remover o indice 3, 1 argumento só, e no lugar, colocar o 'Luiz'.
console.log(nomes);

// Simulando o shift:
nomes.splice(0, 1); // Armazenou a 'Maria' na const e tirou a mesma do array nomes.
console.log(nomes);

// Simulando o push:
nomes.splice(nomes.length, 0, 'Marcondes');
console.log(nomes);

// Simulando o unshift:
nomes.splice(0, 0, 'Gertrudes');
console.log(nomes);