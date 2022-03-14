// Funções que entregam/geram os valores pouco a pouco. Nunca de uma vez só. Pode ser bom pra perfomance do programa, dependendo da situação.

function* geradora1() {
    // Código aqui...
    yield 'Valor 1';  // Quase como se fosse o return
    // Código aqui...
    yield 'Valor 2';
    // Código aqui...
    yield 'Valor 3';
}
// Na 1 vez que chamar a função, ele vai retonar o 1 yield, na segunda o 2 e assim por diante.

const g1 = geradora1();
console.log(g1); // Aqui mostra um objeto.
console.log(g1.next()); // Retorna um objeto com 2 chaves { value: 'Valor 1', done: false }
// Para acessar o valor desse gerador de objeto:
console.log(g1.next().value); // Valor 2, pois, é a segunda vez que foi chamada a função.
console.log(g1.next());
console.log(g1.next()); // Nesse caso, é só na 4 vez que a função é chamada que o done fica como true, porque até a 3 a função não sabe que é o último valor.

for (let valor of g1) { // Podemos utlizar o for para iterar sobre a função.
    console.log(valor);
}

function* geradora2() { // Isso seria um looping infinito, porém, como só pe contado 1 a cada chamada da função, não há problema, pois, a cada chamada a função executa, mas depois para.
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

// Fazendo uma função geradora, fazer outra função geradora executar algo:

function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}