const express = require('express');
const app = express();

// Quando criamos uma API, nosso servidor deve ser capaz de CRIAR algo, LER algo, ATUALIZAR(Editar) algo e APAGAR algo - Isso é comumente chamado de CRUD.

//        Criar     Ler     Atualizar  Apagar
// CRUD = CREATE,   READ,   UPDATE,    DELETE
//        POST      GET     PUT        DELETE

// O Express nos ajuda muito a definir as rotdas do nosso site.
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
})

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Bem-vindo a página de Contato');
})

app.listen(3000, () => console.log('Acessar http://localhost:3000'));