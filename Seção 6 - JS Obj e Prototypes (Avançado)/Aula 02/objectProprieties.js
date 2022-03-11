// Podemos travar algumas propriedades específicas do objeto ao invés de todas, como quando usamos o .freeze(). Com o defineProperty para uma propriedade e defineProprieties para mais de uma

function Produto(nome, preco, estoque) { // Função construtora que cria um produto.
    // this.nome = nome; // Com o this, a propriedade se torna pública (podemos acessá-la fora do objeto.)
    // this.preco = preco;
    // this.estoque = estoque; // Vamos fazer com que o estoque não possa ser alterado
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // editável
        configurable: false // configurável - ou seja, não podemos reconfigurar a chave
    })
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}
// Dá muit mais controle sobre o que cada chave do objeto aceita ou não.

const p1 = new Produto('Camisa', 19, 4);
console.log(Object.keys(p1)); // Traz um array que mostra as chaves do objeto. Se o enumerable estiver como falso, não aparece no array.