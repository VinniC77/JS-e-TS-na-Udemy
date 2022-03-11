// A função construtora também traz/cria objetos.
// Na função construtora, precisamos mudar a convenção de camelCase e precisamos sempre iniciar seu nome com letra maiúscula:
// factory function -> criaPessoa / construction function - Pessoa (new)
// Ambas funcionam como um molde para gerar vários objetos a partir delas.

function Pessoa(nome, sobrenome) {

    // Atributos ou métodos públicos.
    const ID = 1234;
    const metodoInterno = () => {
        console.log('Só posso ser acessado de dentro da função');
    }

    // Atributos ou métodos públicos. Onde podemos acessar através do . Ex.: pessoa1.nome.
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => console.log(`Sou um método da pessoa: ${this.nome}`);
}
// função construtora criada. Agora sempre que quisermos criar objetos a partir dela, precisamos colocar a palavra new na frente da função.

const pessoa1 = new Pessoa('Vinicius', 'Clunc');
const pessoa2 = new Pessoa('Jessica', 'Malaquias');

console.log(pessoa1);
pessoa1.metodo();