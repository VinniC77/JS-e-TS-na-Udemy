const data = new Date(); // Função construtora. Sempre começa com "new" e com a primeira letra em maiúsculo.
// Se não passarmos nenhum parâmetro, essa função trará a data atual, com hora, minuto, segundo, etc...

const tresHoras = 60 * 60 * 3 * 1000; // Aqui é 3 dias em milisegundos

const date = new Date(0 + tresHoras); // Esse é o marco zero. Essa hora é a de 01/01/1970. Timestamp Unix, mas como estamos no horario de Brasilia, temos 3 horas a menos

const umDia = 60 * 60 * 24 * 1000; // Essa é a representação de 1 dia em milisegundos.

console.log(date.toString());

const novaData = new Date(2019, 3, 20, 15, 14, 27) // (ANO), (MES), (DIA), (HORA), (MINUTO), (SEGUNDOS). Esses números representam a data de 20 de ABRIL de 2019, às 15h14min27seg. Abril é 3 porque a contagem é como no índice de array, começa com o 0 (JAN) e vai até o 11 (DEZ).

console.log(novaData.toString());

const outraData = new Date('2019-04-20 15:14:27') // Essa é a forma literal (O mês 04 aqui representa ABRIL)
console.log('Dia', outraData.getDate()); // Para pegar o dia
console.log('Mês', outraData.getMonth() + 1); // o +1 é pq a contagem do mês começa com 0, assim como em índices de um array.
console.log('Ano', outraData.getFullYear());
console.log('Hora', outraData.getHours());
console.log('Minutos', outraData.getMinutes());
console.log('Segundos', outraData.getSeconds());
console.log('Milisegundos', outraData.getMilliseconds());
console.log('Dia Semana', outraData.getDay()); // Para obter o dia na semana. (de 0 a 6). 0 é Domingo e 6 é Sábado.

// Função para colocar no formato Brasil de data.

function zeroAEsquerda(num) { // Para adicionar um zero a esquerda quando a data for menor de 10.
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataBrasileira = new Date();
const dataBrasil = formataData(dataBrasileira);
console.log(dataBrasil);