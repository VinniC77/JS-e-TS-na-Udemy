// forEach é mais uma forma de iterarmos sobre um array. Ao invés de utilizar os "for"

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let valor of a1) {
    console.log(valor);
}

a1.forEach(vlr => console.log(vlr)); // Faz a mesma coisa