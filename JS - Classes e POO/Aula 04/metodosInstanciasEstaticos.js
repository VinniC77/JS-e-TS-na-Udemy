// Métodos estáticos são métodos que podemos acessar na classe, sem associar a classe (sem utilizar a palavra new).
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Métodos de instância: Que são acessados somente quando a classe for criada.
    aumentarVolume() {
        this.volume += 1; // Quando eu aperto o botão de volume, ele aumenta de 1 em 1.
    }
    diminuirVolume() {
        this.volume -= 1; // Quando eu aperto o botão de volume, ele diminui de 1 em 1.
    }
    // Método Estático
    static trocaPilha() { // Não poderá ser acessado através do objeto criado dessa classe: controle1.trocaPilha(). Só a partir da própria classe pai: ControleRemoto.trocaPilha()
        console.log('Ok, pilha trocada.')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha(); // Aqui não estamos instanciando a classe e não temos acesso ao construtor.