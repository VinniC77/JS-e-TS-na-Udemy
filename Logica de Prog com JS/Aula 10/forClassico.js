console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
console.log('------------------------------------');

for (let i = 0; i <= 5; i++) { // Definição de início do laço / Condição do looping / incremento
    console.log(`Linha ${i}`);
}

// Outro exemplo:

for (let i = 100; i <= 150; i += 10) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Ímpar';
    console.log(i, par)
}


const frutas = ['Maca', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i} `,frutas[i]);
}