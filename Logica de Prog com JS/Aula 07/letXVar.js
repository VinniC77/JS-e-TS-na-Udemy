const verdadeira = true;

// let tem escopo de bloco { ...bloco }
// var só tem escopo de função

let nome = 'Vini'; // Criando

var nome2 = 'Vini'; // Criando

console.log(nome, nome2); // Vini Vini

if (verdadeira) {
    var nome2 = 'Jessica'; // Redeclarando
    let nome = 'Jeferson'; // Criando
    console.log(nome, nome2); // Jeferson Vini
}

// O var, sempre que for redeclarado, utilizará o último valor para mostrar, independente de estar dentro de {} ou não.

function falarOi() {
    var sobrenome = 'Clunc';
}

console.log(sobrenome); // O JS não encontra a var criada dentro da função. Quando está dentro da funcão, ela não permite o acesso a outra coisa.