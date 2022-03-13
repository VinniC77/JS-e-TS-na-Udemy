// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(falaNome());

const axios = require('axios'); // para importar um modulo do node não é necessário colocar o ./
const { Pessoa } = require('./mod1'); // diferene daqui onde o modulo foi criado por mim.

const p1 = new Pessoa('Vini');
console.log(p1);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json') // exemplo simples do uso do axios.
    .then(response => console.log(response.data));