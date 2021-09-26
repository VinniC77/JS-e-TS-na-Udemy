// alert('Com a nossa mensagem');

// confirm('Deseja realmente apagar?');

// let num1 = prompt('Digite um número: ');
// let num2 = prompt('Digite outro número: ');

// let primeiro = Number(num1);
// let segundo = Number(num2);

// let resultado = primeiro + segundo;

// alert(`A soma de ${primeiro} e ${segundo} é igual a ${resultado}`);

let varA = 'A';
let varB = 'B';
let varC = 'C';

// Queremos que seja impresso B C A

// varA = varB; // B
// varB = varC; // C
// varC = varA; // B

// console.log(varA, varB, varC);

// const varATemp = varA;

// varA = varB; // B
// varB = varC; // C
// varC = varATemp; // A

// console.log(varA, varB, varC);

// OU utilizando array

// [varA, varB, varC] = [varB, varC, varA]

// console.log(varA, varB, varC);

// let umaString = 'Um "texto"';

// console.log(umaString);
// console.log(umaString[4]);
// console.log(umaString.concat(' em um lindo dia'));
// console.log(umaString.indexOf('texto'));
// console.log(umaString.replace('texto', 'passaro')); // tira um e põe o outro.
let umTexto = 'O rato roeu a roupa do rei de roma.';

console.log(umTexto.replace(/r/, '#')); // da replace no primeiro r
console.log(umTexto.replace(/r/g, '#')); // da replace em todos os r encontrados na variável.
console.log(umTexto.length);
console.log(umTexto.slice(2, 6)); // rato
console.log(umTexto.slice(-5)); // roma.
console.log(umTexto.slice(-5, -1)); // roma
console.log(umTexto.split(' ')); // transforma em array, conforme o intervalo. No caso o espaço.
