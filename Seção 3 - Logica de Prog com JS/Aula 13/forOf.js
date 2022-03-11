// O for Of é específico para objetos iteráves.
const nome = 'Vinicius Clunc';

for (let i = 0; i < nome.length; i++) { // for clássico
    console.log(i)
}

for (let i in nome) { // for in - O mais indicado para ser utilizado com objetos.
    console.log(i);
}

for (valor of nome) { // for of traz sempre o valor encontrado no índice da iteração.
    console.log(valor); // Não utilzamos o for of com objetos porque objetos não são iteráveis.
}

const nomes = ['Vini', 'Jeferson', 'Marcondes', 'Gecir']

nomes.forEach(function(valor, indice) { // Para iterar em arrays, temos o método forEach do JS.
    console.log(valor, indice);
}) // Além de valor e indice, o 3 elemento no parametro da forEach tráz o array completo que está sendo iterado.

// Não é obrigatório colocar valor e indice, se colocarmos somente 1 parametro, irá trazer p valor do array iterado em cada indice.

// nomes.forEach((valor, indice) => { // Mesmo método, utilizando arrow function
//     console.log(valor, indice);
// })

/*
    EM RESUMO:
    For clássico - Geralmente se usa com iteráveis (array ou strings)
    For in - Retorna o índice ou chave, usa-se em (array, strings ou objetos)
    For of - Retorna o valor em si, usa-se em (iteráveis, arrays ou strings)
*/