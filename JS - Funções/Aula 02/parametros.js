function funcao() { // Mesmo que não tenhamos definido parametros para a função, ao usar o arguments no conselo.log, o JS irá mostrar o que foi colocar ao chamar a função. Só funciona quando a função é declarada com a palavra function. Não funciona com arrow function, por exemplo.
    console.log(arguments);
}
funcao('Valor', 32, 54, 65, 69, 77);

// Mais um exemplo de como o JS interpreta como parametro o que é digitado em funçãoes declaradas sem uma definição de parametro.

function qualquer() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total);
}
qualquer(2,4,5,7,8,6,5,4,9);

function nova(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f)
}
nova(1, 2, 3); // O JS atribui o valor às variáveis e se não tiver mais valor, estes parametros recebem undefined.

// Podemos pré-definir os valores dos parametros que não foram definidos ao chamar a função. Exemplo:
function soma(a, b = 7, c){
    console.log(a + b + c)
}
soma(2, undefined, 5); // Quando queremos que o JS assuma o valor de "b", precisamos colocar o undefined para que o JS considere o valor setado na declaração da função.

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) { // of para pegar os valores que serão somados.
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 40, 60, 80);