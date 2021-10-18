// setInterval serve para trabalharmos com intervalo de tempo.
// Serve para determinarmos que uma função seja executada em um espaço de tempo pré-definido.

function mostraHora() { // Função que mostr a hora atual em formato pt-BR e de 24h.
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// No primeiro parâmetro informamos a função que desejamos executar e no segundo o tempo de intervalo para que a mesma seja executada:

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000); // O tempo é informado em milisegundos. No caso a cada 1 segundo.

// A setTimeOut é uma espécie de limitador e é utilizada para parar a função que está sendo executada a cada intervalo.

setTimeout(function(){
    clearInterval(timer);
}, 10000); // Irá parar a execução da variável timer em 10 segundos.