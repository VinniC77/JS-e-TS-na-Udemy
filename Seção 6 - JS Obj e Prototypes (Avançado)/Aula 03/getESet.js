// Com getters e setters, podemos simular um método do objeto como se esse fosse uma propriedade do objeto, não precisando utilizar os parenteses para chamar esse método.
// Mas também podemos usá-los para proteger as propriedades do objeto

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque; // Basicamente o getter vair retornar o valor
        },
        set: function(valor) { // O set serve para setar/atribuir um valor ao que está no parametro.
            if (typeof valor !== 'number') {
                console.log('Seu valor deve ser em numeral');
                return;
            }
            console.log(valor);
        }
    })
}

const p1 = new Produto('Camisa', 25, 5);
p1.estoque = 55;
console.log(p1.estoque);