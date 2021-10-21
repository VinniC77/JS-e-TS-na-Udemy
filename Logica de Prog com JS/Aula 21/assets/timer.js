function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour21: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciarRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

iniciar.addEventListener('click', (e) => {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener('click', (e) => {
    clearInterval(timer);
    relogio.classList.add('pausado');
});

zerar.addEventListener('click', (e) => {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0; 
});

// Outra forma de fazer utilizando o e.target (que captura em qual local da tela o usuario clicou.)

// document.addEventListener('click', () => {
//     const elemento = e.target;
//     if (elemento.classList.contains('iniciar')) {
//         relogio.classList.remove('pausado');
//         clearInterval(timer);
//         iniciarRelogio();
//     } else if (elemento.classList.contains('pausar')) {
//         clearInterval(timer);
//         relogio.classList.add('pausado');
//     } else if (elemento.classList.contains('zerar')) {
//         relogio.classList.remove('pausado');
//         clearInterval(timer);
//         relogio.innerHTML = '00:00:00';
//         segundos = 0; 
//     }
// })