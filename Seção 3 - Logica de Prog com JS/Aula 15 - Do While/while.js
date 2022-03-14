// While - Laço de repetição
let index = 0;

while (index <= 10) {
    console.log(index);
    index++; // Sempre temos que lembrar de incrementar a variável para não criarmos um looping infinito.
}

const nome = 'Vinicius';
let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++; // Sempre temos que lembrar de incrementar a variável para não criarmos um looping infinito.
}

// função para gerar números aleatórios entre os valores digitados em min e max:
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r); // Para arredondar o número sem casas decimais. (Número inteiro)
}

let rand = random(1, 50);

// Gerando um laço de repetição que só parará quando o número aleatório gerado for 10. Quando gerar o 10, o laço para.
while (rand !== 10) {
    rand = random(1, 50);
    console.log(rand);
}