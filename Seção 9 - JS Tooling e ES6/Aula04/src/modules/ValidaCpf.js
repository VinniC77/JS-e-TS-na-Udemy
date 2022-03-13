// Validando CPF's utilizando classes

export default class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false, // para não poder subescrever
            enumerable: false, // Não mostra no console.log
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') // Para remover tudo que não é número.
        });
    }
    eSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.lenght);
    }

    geraNovoCPF() {
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);
        this.novoCpf = cpfSemDigito + digito1 + digito2;
    }

    static geraDigito(cpfSemDigito) { // Quando um método não utiliza o this, e nesse caso, além disso,  estamos recebendo uma variável no parâmetro.
        let total = 0;
        let reverso = cpfSemDigito.length + 1;
        for(let stringNumerica of cpfSemDigito) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(!this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCPF();

        return this.novoCpf === this.cpfLimpo;
    }
}

console.log('Cheguei aqui');