// Polimorfismo - Fazer com que métodos se comportem de maneira diferente em sub-classes, ou seja, classes filhas de uma classe pai (função construtora).

function Conta(agencia, conta, saldo) { // Superclasse ou classe pai
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
// Criando os métodos da classe Conta:
Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: R$${this.saldo}`);
        // Se o saldo for menor que o valor que a pessoa quer sacar eu mostro o saldo
        return;
    }
    // Se tem saldo, irá poder sacar e depois mostra o saldo menos o valor sacado:
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor; // Saldo atual mais o valor que está sendo depositado.
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c.: ${this.agencia} / ${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta(11, 22, 100);
// console.log(conta1);

// conta1.depositar(50);
// conta1.sacar(30);

// Agora vamos criar uma conta corrente e uma conta poupança utilizando os recursos dessa super-classe
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Agora vamos reescrever o método sacar adaptado para a Conta Corrente, que neste caso permite o saldo negativo:
ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        // Como é conta corrente, ele pode sacar se o valor for maior que o saldo mais o limite da conta
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

// const contaCorrente = new ContaCorrente(11, 22, 20, 100);
// console.log(contaCorrente);
// contaCorrente.depositar(10);
// contaCorrente.sacar(130);
// contaCorrente.sacar(50);

// Agora vamos criar a conta poupança:
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaPoupanca = new ContaPoupanca(11, 22, 20, 100);
console.log(contaPoupanca);
contaPoupanca.depositar(10);
contaPoupanca.sacar(130);
contaPoupanca.sacar(50);

// Aqui, como não tem limite, aparece o saldo insuficiente antes.

// A principal característica do polimorfismo é justamente isso, fazer com que métodos se comportem de forma diferente em classes filhas de um mesmo pai conforme quisermos.