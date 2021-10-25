function retornaFuncao(nome) {
    return function() {
        return nome;
    }
}

const funcao = retornaFuncao();
console.log(funcao); // Retorna a função anonima que foi colocada no return da função.

// Se chamarmos a função com um parametro, ela assume que o closure é esse parametro e o retorna normalmente.
const funcao1 = retornaFuncao('Marcos');
const funcao2 = retornaFuncao('Jeferson');

console.log(funcao1(), funcao2());