// Gerando um tempo aleatório para colocar no timeOut de cada função
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand()); // A cada execução, gererá um numero entre 1000 e 3000, ou seja, entre 1 e 3 segundos.

function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback(); // Se existir um callback, execeute.
    }, rand());
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// Agora não sabemos quando cada uma das funções será executada.

// Então vamos criar uma função de callback para que o JS exiba as funções em ordem. A primeira coisa é colocar um callback no parametro das funções.

f1(function(){ // Nesse momento, estamos executando uma função de callback na função 1 que chama a execução da função 2.
    f2(function(){ // Dentro dos parâmetros da função 2, chamamos o callback, que neste caso irá executar a função 3.
        f3(function(){
            console.log('Olá Mundo!');
        }); // O f3 também receberá um callback que será o console.log('Olá Mundo!').
    });
})

// Assim, criamos a ordem correta de execução. F2 nunca será executada antes de f1 e f3 nunca será executada antes de f2. E o Olá Mundo! sempre será executado ao final delas.