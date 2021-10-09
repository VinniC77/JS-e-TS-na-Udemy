const data = new Date();

const diaDaSemana = data.getDay();
console.log(diaDaSemana);

let diaSemanaTexto;

if (diaDaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaDaSemana === 1) {
    diaSemanaTexto = 'Segunda-feira';
} else if (diaDaSemana === 2) {
    diaSemanaTexto = 'Terça-feira';
} else if (diaDaSemana === 3) {
    diaSemanaTexto = 'Quarta-feira';
} else if (diaDaSemana === 4) {
    diaSemanaTexto = 'Quinta-feira';
} else if (diaDaSemana === 5) {
    diaSemanaTexto = 'Sexta-feira';
} else if (diaDaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = 'Você não digitou um valor válido.'
}
console.log(diaDaSemana, diaSemanaTexto)

// Esse é um caso perfeito para se utilizar Switch

switch (diaDaSemana) { // Se é checada somente uma variável, o Switch é o mais indicado.
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Você não digitou um valor válido.' // O default é obrigatório em todos os casos de uso o Switch/Case
} 