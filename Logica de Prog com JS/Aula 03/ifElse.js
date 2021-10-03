/*
    Entre 0 e 11 horas - Bom dia
    Entre 12 e 17 horas - Boa tarde
    Entre 18 e 23 horas - Boa noite
*/

const hora = 34;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Essa não é uma hora válida.')
}

// if pode ser usado sozinho.
// Sempre que usamos um else ou u if else, é porque houve um if antes.
// Posso ter vários else if for preciso.
// Só posso ter um else 
// Podemos usar condições sem o if else, apenas com if e else se necessário.

const tenhoDinheiro = NaN

if (tenhoDinheiro) {
    console.log('Vou sair de casa.')
} else {
    console.log('Não vou sair de casa.') // Como Nan é um valor false, vai cair nessa condição.
}

// o JS devolve a SOMENTE a primeira condição verdadeira que ele encontrar

const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.')
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.')
} else if(1 === 1) { // Mesmo não tendo nada a ver com a lõgica buscada no if, por ser uma condição verdadeira, o JS irá retornar o que estiver nesta parte do código e parará por aqui.
    console.log('Comparação literal')
} else if (numero >= 9 && numero <= 11) { // Essa é a condição verdadeira
    console.log('O número NÃO está entre 0 e 11.')
} else {

}