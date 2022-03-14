// Tratando erros. Sempre que algo der errado o JS lancará aquele monte de linha em inglês, mas podemos tratar esses erros e exibir alguma mensagem mais amigável.

try {
    console.log(naoExisto);
} catch(err) { // o parametro do catch, pode receber qualquer nome. Normalmente se usa err
    console.log('A variável naoExisto não existe');
}

// Exemplo de como antever e tratar um erro em uma função:

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números');
    }

    return x + y;
}

try {
    console.log(soma(2, 6));
    console.log(soma(2, 'k'));
} catch(e) {
    console.log(e);
}