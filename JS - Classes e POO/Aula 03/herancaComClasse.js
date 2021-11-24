class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado.`);
            return;
        }
        this.ligado = true;
    }
    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado.`);
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
console.log(d1);

// Classe que herda da classe DispositivoEletronico criada anteriormente.

class Smartphone extends DispositivoEletronico { // Assim o smartphone já terá tudo o que o DispositivoEletronico tem dentro dele.
    constructor(nome, cor, modelo) {// além do nome, essa classe também receberá uma cor.
        super(nome); // Ao invés de reescrever a classe mãe, utilizamos o super e entre parenteses o parametro que queremos manter dessa classe, chamando o construtor da classe pai, obrigatoriamente.
        this.cor = cor;
        this.modelo = modelo;

    }
}

const s1 = new Smartphone('Samsung', 'Vermelho', 'Galaxy S10');
s1.ligar();
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('Assim, você altera o método ligar.')
    }
    falaOi() { // Esse método é só do Tablet. Pois, na herança as classes filhas herdam tudo de seus pais, mas suas classes pais não herdam nada das classes filhas.
        console.log('Oi');
    }
}

const t1 = new Tablet ('iPad', true);
t1.ligar(); // Como criamos um método ligar dentro do objeto Tablet, o JS irá buscar esse método e não o método ligar da classe DispositivoEletronico.
