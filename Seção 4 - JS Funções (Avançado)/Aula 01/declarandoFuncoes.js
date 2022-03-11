// Todas as funções em JS são First-Class Objects (Objetos de primeira classe). Significa dizer que podemos armazenar dados dentro da função e atribuir uma função a uma variável:
const souUmDado = function() {
    console.log('Sou um dado');
}

// Declaração clássica de Função (function hoisting) - Faz com que possamos chamar a função antes de ter declarado.
falarOi();
function falarOi() {
    console.log('Oi');
}

// Podemos utilizar uma função que executa outra função:
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow Function
const funcaoArrow = () => {
    console.log("Sou uma arrow function.");
}
funcaoArrow();

// Podemos jogar funções para dentro de objetos:
const pessoa = {
    nome: 'Vini',
    sobrenome: 'Clunc',
    falarNomeCompleto: function () {
        console.log(`Meu nome completo é ${this.nome} ${this.sobrenome}`);
    }
}
pessoa.falarNomeCompleto();