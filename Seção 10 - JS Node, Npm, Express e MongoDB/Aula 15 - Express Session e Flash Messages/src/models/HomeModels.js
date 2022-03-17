// Geralmente o model vai ser uma classe, por isso, são comumente nomeados com a primeira letra maiúscula.
const mongoose = require('mongoose');

// Modelagem dos Dados - Aqui estamos inserindo no banco de dados os tipos de dados que iremos querer lá.
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = new mongoose.model('Home', HomeSchema);

// Segundo o cara, não precisamos exportar o modulo também.
// module.exports = HomeModel;

// Geralmente se exporta a classe:
class Home {
    
}

module.exports = Home;