const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Exemplo de Middleware
// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Vinicius', sobrenome: 'Clunc'};
//     console.log();
//     console.log('Passei no seu middleware');
//     console.log();
//     next();
// }

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de Contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;