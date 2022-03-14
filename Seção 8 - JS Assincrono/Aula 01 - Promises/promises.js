function rand(min, max) { // Função para gerar um número aleatório em segundos.
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// function esperaAi(msg, tempo) { // Essa função vai demorar esse 'tempo', para executar esse código.
//     setTimeout(() => {
//         console.log(msg);
//     }, tempo);
// }

// esperaAi('Frase1', rand(1, 3)); // Essa mensagem demorará entre 1 e 3 segundos para exeutar.
// esperaAi('Frase2', rand(1, 3)); 
// esperaAi('Frase3', rand(1, 3)); 

// Dessa maneira, cada função executará em ordens diferentes, já que o tempo é um número (em segundos) aleatório entre 1 e 3. 
// Mas queremos fazer com que elas sejam executadas em ordem, ou seja, da frase1 até a frase3, independente do tempo que cada uma delas levar para ser executatada.
// --------- É AÍ QUE ENTRAM AS PROMISES ---------- 
// Envolvendo a mesma função dentro de uma promise:

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { // Agora ou resolvemos ou rejeitamos a promessa.
        if(typeof msg !== 'string') reject('Bad value.');

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 5))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22, rand(1, 5));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 5));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(erro => {
        console.log('ERRO:', erro);
    }) 
// Sempre que chamarmos o resolve o .then será executado. Sempre que chamarmos o reject o .catch vai capturar o erro.