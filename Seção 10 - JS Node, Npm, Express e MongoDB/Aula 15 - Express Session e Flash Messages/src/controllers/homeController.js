// const HomeModel = require('../models/HomeModels');

// segundo o cara, raramente vamos utilizar isso daqui.

// HomeModel.find()
//     .then(dados => console.log(dados))
//     .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Jessica', logado: true }; // Essa seçõa ficará "no ar" por 7 diasm conforme configuramos.
    // As mensagens abaixo, aparecem somente uma vez depois de chamadas. É criado um array de mensagens
    // req.flash('info', 'Olá mundao');
    // req.flash('error', 'Thats an error');
    // req.flash('success', 'Sucesso!');
    // console.log(req.flash('error'), req.flash('info'), req.flash('success'));
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}