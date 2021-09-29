// Funções

function saudacao(nome) {
    console.log(`Olá ${nome}`);
    return 123;
}

const variavel = saudacao('Jéssica'); // O que será salvo na variavel criada pra a atribuição da função é o que está no return da mesma.

console.log(variavel) // Por padrão as funções retornam undefined no JS quando não tem o return.

function bomDia (nome) {
    return `Bom dia ${nome}!` // O correto então é colocar sempre o return
}

const varia = bomDia('Blades'); // Colocando o return, ao adicionar um parametro e atribuir a função a uma variável, ela retorna o que deve ser retornado ao invés do undefined.

console.log(varia);

function soma(x, y) {
    const resultado = x + y; // As variáves criadas dentro do escopo da função não tem relação nenhuma com as criadas fora, ou seja, poderiamos criar outra const resultado fora do corpo da função.
    return resultado
}

console.log(soma(3,4));
// console.log(resultado) // Dará um erro, pois, tentamos acessar a variável de dentro do escopo da função.

// Função anonima

const raiz = function(n) {
    return n ** 0.5;
}; // Nesse caso o ; é obrigatório!

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(169));

// Arrow Function

// ISSO
const dobro = function(n) { // Declaração de função normal
    return n * 2;
};

// É a mesma coisa que ISSO !!
const dobro1 = n => n * 2;

console.log(dobro(4));
console.log(dobro(7));

// Remove-se a palavra function
// Utiliza-se uma arrow (flecha, =>)
// Quando existe só uma linha na função, podemos eliminar o return e as chaves.
// E quando tem somente UM PARAMETRO, podemos eliminar os parênteses !!! QUE FODA!!!