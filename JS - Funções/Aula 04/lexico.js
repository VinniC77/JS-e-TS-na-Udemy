// Podemos acessar uma variável de escopo global num escopo local. Esse é um exemplo de escopo léxico.
const nome = 'Vini';

function falaNome() {
    console.log(nome); // Se o JS não encontra a varíavel nome aqui, ele busca no pai e assim por diante até chegar no escopo global.
}
falaNome();