// Vamos utilizar os 3 métodos juntos em um só variável.

// Retorne a soma do dobro de todos os pares
// -> Filtrar pares - Com o filter
// -> Dobrar os valores - Com o map
// -> Reduzir (somar tudo) - Com o reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27];

const numerosPares = numeros.filter(vlr => vlr % 2 === 0).map(vlr => vlr * 2).reduce((acc, vlr) => acc + vlr);

console.log(numerosPares);

// [  50,  80, 2,  8, 22 ] pares - Resultado do filter
// [ 100, 160, 4, 16, 44 ] dobro - Resultado do map
// 324 -> Soma dos valores dobrados - Resultado final (e do reduce)