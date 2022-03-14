const fs = require('fs').promises;

// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

// fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w' })

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' })
}