// O reduce é comumente utilizado para reduzir o array a 1 único elemento.

// Some todos os números (reduce)
// Retorne um array com os pares (simulando o reduce como se fosse o filter)
// Retorne um array com o dobro dos valores (simulando o reduce como se fosse o map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// Além dos 3 parâmetros padrões iguais do filter e map, o reduce recebe como primeiro o acumulador
const total = numeros.reduce((acumulador, valor, indice, array) => { 
    acumulador += valor; // Que é a mesma coisa que escrever acumulador = acumulador + valor a cada iteração
    console.log(acumulador, valor);
    return acumulador;
}, 0); // E o zero aqui, depois da função de callback, é o valor que o acumulador inicia.

console.log(total); // O ultimo valor que foi pra variável total foi a soma acumulada no acumulador depois de todas as iterações no array em que ao método reduce foi implementado.

const pares = numeros.reduce((acc, vlr, ind, arr) => {
    if (vlr % 2 === 0) acc.push(vlr);
        return acc;
}, []);
// Não é recomendável fazer isso com o reduce. Para isso, a melhor opção seria o filter
console.log(pares);


const dobro = numeros.reduce( (acc, vlr) => {
    acc.push(vlr * 2);
    return acc;
}, []);
// Não é recomandável fazer isso com o reduce. Para isso, a melhor opção seria o map
console.log(dobro);


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
]
const maisVelha = pessoas.reduce((acc, vlr) => {
    if (acc.idade > vlr.idade) return acc;
    return vlr;
}); 
// Ao não especificarmos nenhum valor para iniciar o acumulador, o JS considere o acumulador o primeiro item do array, no caso o acc.idade, assim, o JS vai comparando cada propriedade idade de cada objeto e retornará o acumulador ou valor que for maior que a vlr.idade
console.log(maisVelha);