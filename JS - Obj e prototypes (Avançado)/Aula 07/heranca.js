// Simulando um sistema de e-commerce que vende: Camiseta e caneca. Para colocar tudo num mesmo molde, definimos que todos são Produtos
function Produto(nome, preco) { // Todos os produtos tem nome e preço
    this.nome = nome;
    this.preco = preco;
}

// Cada produto tem características distintas dependendo do tipo. Ex.: camiseta = Cor, caneca = meterial.
// Mas vamos ter métodos que os produtos vão compartilhar de aumento e desconto no preço.
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

// Criando uma função construtora para camiseta
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // Assim linkamos as 2 funções e Camiseta funcionará como Produto
    this.cor = cor;
}

// Ainda não temos os métodos aumento e desconto na função Camiseta, mesmo linkando através do .call, pois, cada função tem o seu prototype. Até esse momento em Camiseta.prototype não tem nada. Para resolver isso, fazemos:
Camiseta.prototype = Object.create(Produto.prototype); 
// Mas precisamos linkar o prototype antigo da função para usar o construtor correto:
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('Generico', 49);
const camiseta = new Camiseta('Regata', 19, 'Preta');
console.log(produto);
console.log(camiseta);
// Camiseta herda tudo que Produto tem, mas também pode ter suas coisas específicas.

// Alterando o método aumento somente dentro de Camiseta:
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}
console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype); // Para criar o prototype de Caneca com base no Produto
Caneca.prototype.constructor = Caneca; // Para linkar o construtor da Caneca para Caneca, caso não façamos isso, o construtor dessa função ficaria sendo o Produto (por termos linkado o prototype de Produto anteriormente)
const caneca = new Caneca('Caneca do Batman', 25, 'Plastico', 5);

caneca.estoque = 50; // Usando o setter (para configurar/editar a quantidade de estoque)
console.log(caneca.estoque); // Usando o getter (para mostrar a quantidade  de estoque)

console.log(camiseta);
console.log(produto);