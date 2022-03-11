/*  Em JS tudo pode ser avaliado em true ou false 
    FALSY VALUES IN JS by Default:
    false
    0
    ''
    ""
    ``
    null / undefined
    NaN
    Qualquer coisa diferente disso, o JS avalia como true.
*/

console.log('Vini' && NaN && 'Maria'); // o JS retorna o valor que foi considerado false, no caso o NaN

function falarOi() {
    return 'Oi';
}

let vaiExecutar;
console.log(vaiExecutar && falarOi()); // Como a variavel vaiExecutar é undefined, o JS retorna o valor da primeira variável, no caso undefined e não executa a função.

let nome = 'Vini';
console.log(nome && falarOi()); // Como a variavel nome é um valor true, o JS passa para a próxima tarefa e executa a função.

console.log(0 || false || null || NaN || 'Vini' || true); // No caso do operador OU, ele retorna o primeiro valor true.

// Exemplo. Um site tem uma cor padrão  para exibir, mas dá opção de escolha do usuário

const corUsuario = null;
// Ao invés de construir um if ou ternario, basta criar uma variável conforme abaixo.
const corPadrao = corUsuario || 'preto';
// Como o OU traz sempre o primeiro resultado true, caso nenhuma cor for escolhida pelo usuario, a cor preto será exibida, já que o valor null é por default, falso.
console.log(corPadrao); // Preto. Se existisse um valor true, como um nome de cor, esse seria o valor mostrado pelo console.
