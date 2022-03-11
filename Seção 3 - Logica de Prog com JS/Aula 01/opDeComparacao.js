/*
    Operadores de comparação:
    > MAIOR que
    >= MAIOR ou IGUAL a 
    < MENOR
    <= MENOR ou IGUAL a
    == IGUALDADE (valor)
    === igualdade ESTRITA (valor e tipo)
    != DIFERENTE (valor)
    !== diferente ESTRITO (valor e tipo)
*/

console.log(10 > 5);

/*
    Operadores Lógicos:
    && - and - e -> Todas as expressões precisam ser true para retornar true
    || - or - ou -> Apenas uma true é o suficiente para retornar true
    ! - not - não -> 
*/

const usuario = 'Luiz';
const senha = 123;

const vaiLogar = usuario === 'Luiz' && senha === 123; // Os dois precisam estar OK para passar
const vaiLogar1 = usuario === 'Luiz' || senha === 123; // Apenas um precisa estar OK para passar
console.log(vaiLogar);

console.log(true);
console.log(!true); // Negação, inverte a lógica. Simples assim.
