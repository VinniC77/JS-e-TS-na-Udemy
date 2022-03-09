function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) { // Esta função só está simulando algo que demora.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand())
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase:', fase);
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {
        
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);
    
    const fase2 = await esperaAi(2, rand()); // Aqui ocorre a excessão, então cai no erro.
    console.log(fase2);
    
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);
    
    console.log('Terminamos na fase: ', fase3);
    } catch(e) {
        console.log(e)
    }
}

executa();

/**
 * As promisses tem 3 estados:
 * Pending - Quando mandamos ela
 * Fullfilled - Resolvida
 * Reject - Rejeitada
 */