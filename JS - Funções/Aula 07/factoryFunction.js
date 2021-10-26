// Funções Fábricas ou Factory Functions são funções que retornam objetos.
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        idade : 22,
        fala: function(assunto) { // Sempre que uma função está dentro de um obejto, a chamamos de método.
            return `${nome} tem ${this.idade} anos e está falando sobre ${assunto}.` // Nesse caso não é necessário utilizar o .this no nome, pois, este foi definido nos parâmetros da função criaPessoa. Porém o peso não foi, então temos que acessar ele através do this. Esse this. se refere a pessoa1 que foi quem chamou o método. Ele se refere ao atributo do objeto. É como se escrevêssemos pessoa1.nome
        },
        altura: a,
        peso: p,
        // Getter - Podemos pegar o resultado da função, como se esse fosse um atributo e acessá-lo como tal utilizando a palavra get antes do método
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2); // o toFixed para retornar apenas 2 casas decimais.
        },
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) { // Aqui, tudo que for colocado como "nome completo" será setado no valor
            // Agora vamos fazer com que o nome seja o primeiro texto digitado e sobrenome seja o resto.
            valor = valor.split(' '); // Aqui dividimos os itens do nome digitado pelo ' '(espaço). transformando num array
            this.nome = valor.shift(); // o método shift recorta o primeiro item do array, no caso do array valor e joga na variável nome através do this.
            this.sobrenome = valor.join(' '); // o método join junta os itens restantes do array utilizando como critério o ' '(espaço) neste caso e joga para a variável sobrenome através do this.
        }
    }
}

const pessoa1 = criaPessoa('Vini','Clunc', 1.81, 83);
console.log(pessoa1.fala('finanças'));
console.log(pessoa1.imc);
const pessoa2 = criaPessoa('Jessica','Malaquias', 1.63, 68);
console.log(pessoa2.imc);
pessoa2.nomeCompleto = 'Maria Antonieta de Los Mariates'; // Esse é o nome que foi colocado no parametro 'valor' do setter.
console.log(pessoa2.nome); // Maria
console.log(pessoa2.sobrenome); // Antonieta de Los Mariates