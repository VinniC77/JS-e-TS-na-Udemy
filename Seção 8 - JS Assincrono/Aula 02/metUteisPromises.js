function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promessas = [
    'Primeiro valor',
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 500),
    esperaAi('Promisse 3', 1000),
    esperaAi(1000, 1000),
    'Outro valor'
]

// Promise.all(promessas) // Se uma der errado, ele rejeita todas
// .then(valor => console.log(valor))
// .catch(erro => console.log(erro));

Promise.race(promessas) // Entrega o primeiro valor resolvido
.then(valor => console.log(valor))
.catch(erro => console.log(erro));

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em Cache')
    } else {
        return esperaAi('Baixei a Página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e));

function baixaPagina2() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em Cache')
    } else {
        return esperaAi('Baixei a Página', 3000)
    }
}

baixaPagina2()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log('ERRO', e));