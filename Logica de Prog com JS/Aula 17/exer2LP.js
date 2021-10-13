/**
 * Escreva uma função chamada ePaisagem que recebe 2 argumentos: largura e altura de uma imagem (number).
 * Retorne true se a imagem estiver no modo paisagem.
 */

function ePaisagem(largura, altura) {
    if (largura > altura) {
        return true;
    } return false;
}

console.log(ePaisagem(120, 340));

// Solução do curso:
function ePaisagem2(largura, altura) {
    return largura > altura // Sem a necessidade de especificar se é true ou false, pois, o JS assume que a condição do return, se verdadeira é true, se é falsa é false.
}

// Ou Arrow Funtcion
const verificador = (largura, altura) => largura > altura;
console.log(verificador(1920, 1080));