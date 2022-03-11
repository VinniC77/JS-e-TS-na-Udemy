// let nome = 'Jeferson'; // String


// console.log( nome, ' nasceu em 1984');
// console.log('Em 2000 ', nome, ' conheceu Maria');
// console.log(nome, ' casou-se com Maria em 2012.');
// console.log('Maria teve 1 filho com ', nome, ' em 2015');
// console.log('O filho de ', nome, ' se chama Eduardo');

// Nao podemos criar variaives com palavras reservadas.
// Variaveis precisam ter nomes significativos.
// Nao podemos começar o nome de uma variavel com um numero.
// Nao podem conter espaços ou traços.
// Utiliza-se SEMPRE camelCase
// Variaveis sao case sensitives, ou seja, nomeCliente e nomecliente são variaveis diferentes para o JS.
// Nãu utilize VAR, utilize LET.

// let sobrenome; // Declarando a variavel.
// sobrenome = 'Mattos';
// console.log(sobrenome);

// Mesma coisa com const + 
// Não se pode modificar o valor de uma const
// Nao se pode declarar uma const sem um valor

let nome = 'Jessica';
let sobrenome = 'Marcondes';
let idade = 22;
let peso = 56;
let altura = 1.67;
let imc = peso / (altura * altura);
let anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem ', idade, ' anos, pesa ', peso,'KG, tem ', altura, ' de altura e seu IMC é de ', imc, '. Nasceu em ', anoNascimento)

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'KG, tem ' + altura + ' de altura e seu IMC é de ' + imc + '. Nasceu em ' + anoNascimento + '.');

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}KG, tem ${altura} de altura e seu IMC é de ${imc}. Nasceu em ${anoNascimento}.`)

const name = 'Vini'; // STRING
const nome1 = "Vini"; // STRING
const nome2 = `Vini`; // STRING
const num1 = 10; // NUMBER
const num2 = 10.53; // NUMBER
let nomeAluno; // UNDEFINED = nao aponta para nenhum local na memória
let sobrenomeAluno = null; // Nuli nao aponta para nenhum local na memória
const aprovado = true; // BOOLEAN = true, false (lógico)
console.log(typeof nome1) // para descobrir o tipo 