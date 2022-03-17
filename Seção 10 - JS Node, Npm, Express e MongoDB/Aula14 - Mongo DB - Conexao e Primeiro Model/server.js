require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// o CONNECTIONSTRING é o caminho de conexão com o servidor e contém usuário e senha para o banco de dados. Para não deixar exposto isso no github, colocamos esse acesso no .env e chamamos aqui e colocamos o que tem no documento .env no .gitignore
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('Pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos prórios middlewares
app.use(meuMiddleware);
app.use(routes);

app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor executando na porta 3000');
    })
});