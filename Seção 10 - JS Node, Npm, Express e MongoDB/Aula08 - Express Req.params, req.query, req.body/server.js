const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// http://facebook.com/profiles/12345?campanha=googleads - o 12345 no caso é o parametro da rota /profiles e depois do ? é a querystrings com um par de chave e valor.
// Com o express, podemos acessar tanto os parametros, quanto as querystrings

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    </form>
    `);
})

// com os 2 pontos antes do nome dos parametros e com a ? depois, os parametros ficam opcionais e se colocar algum, fica no lugar dos parametros 
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query); // Com o query, podemos ver no console o que o for digitado na barra de endereço do navegador (URL) em forma de objeto.
    res.send(req.query.facebookProfile);
})


// no post sempre usamos o .body para trazer tudo que tem na requisição.
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O formulário do cliente ${req.body.nome} foi recebido.`);
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));