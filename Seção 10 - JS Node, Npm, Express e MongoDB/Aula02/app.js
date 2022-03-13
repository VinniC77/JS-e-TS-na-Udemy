// const Cachorro = require('./B/C/D/mod');

// const cachorrinho = new Cachorro('Dog');
// cachorrinho.latir();

const Cachorro = require('./Z/mod2');

const c1 = new Cachorro('Cão');
c1.latir();

/**
 * Para se movimentar entre as pastas ./ representa ir "para frente"
 * ../ representar camninhar uma pasta "para trás".
 */

// Para manipular caminhos, podemos utilizar o modulo path que vem como padrão no node.
// const path = require('path');
// console.log(path.resolve(__dirname));

// console.log(__filename); // é o nome do arquivo atual
// console.log(__dirname); // é o nome da pasta atual
// // Ambos pegam o caminho desde a raiz o computador.