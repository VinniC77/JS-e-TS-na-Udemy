const velocidade_ = Symbol('velocidade'); // Com isso, temos controle sobre a variável velocidade, assim conseguimos deixar a mesma dentro dos parâmetros que estabelecemos anteriormente.
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[velocidade_] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return; // Estabelecendo limites, caso alguém queira setar a velocidade
        this[velocidade_] = valor;
    }

    get velocidade() {
        return this[velocidade_];
    }

    acelerar() {
        if(this[velocidade_] >= 100) return; // Limitador de [velocidade_].
        this[velocidade_]++;
    }

    frear() {
        if(this[velocidade_] <= 0) return; // Para a [velocidade_] não ser negativa.
        this[velocidade_]--;
    }
}

const carro1 = new Carro('Fusca');
// Simulando a acelaração do carr:
for (let i = 0; i <= 200; i++) {
    carro1.acelerar(); // Como a "[velocidade_] máxima" é 100, ele vai acelerar só até 100.
}

carro1.velocidade = 200;
console.log(carro1.velocidade); // 100, ou seja, mesmo setando a velocidade com 200, por termos colocado o limite de 100. Essa será a velocidade mais alta "permitida" ao setar uma velocidade.

// Em resumo o getter é usado quando pedimos para exibir o conteúdo da variável e o setter é usado quando editamos ou atribuímos (com o sinal de =) algum valor para a variável.