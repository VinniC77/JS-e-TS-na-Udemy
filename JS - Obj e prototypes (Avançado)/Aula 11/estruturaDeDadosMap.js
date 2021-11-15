// Não é o método .map  utilizado em array.

const pessoas = [
    { id: 3, nome: 'Jeferson'},
    { id: 2, nome: 'Marcondes'},
    { id: 1, nome: 'Jessica'}
];

// O objetivo é criar um ID para cada objeto do array
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

// O problema nesse caso é que os ID's criados ficaram em string e a ordem mudou de 3, 2, 1 para 1, 2, 3.
// Para melhorar a resolução dessa questão, utilizaremos o Map:

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));

// Com o new Map() os números são Numbers e não mais strings e a ordem se manteve, ou seja, do 3 para o 1.
