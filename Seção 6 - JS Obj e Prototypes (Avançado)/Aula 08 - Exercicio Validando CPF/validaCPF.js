// Validação de CPF
/**
 * Como o governo faz para validar um CPF
 * CPF gerados na internet: 705.484.450-52. Os primeiros nove números multiplicados da seguinte forma:
 *  7    0   5   4   8   4   4   5   0
 * x10  x9  x8  x7  x6  x5  x4  x3  x2
 *  70   0  40  28  48  20  16  15   0 e somados que é igual a 237
 * 
 * Para gerar os últimos 2 dígitos
 * 11 - (237 % 11) = 5 -> primeiro dígito
 * 
 * Para gerar o segundo dígito adicionamos o último número e somamos novamente
 * 
 *  7    0   5   4   8   4   4   5   0  5
 * x11 x10  x9  x8  x7  x6  x5  x4  x3  x2
 *  77   0  45  32  56  20  20  20   0  10 = 284
 * 11 - (284 % 11) = 2 -> segundo dígito
 * 
 * Se, junto com os últimos 2 dígitos, o número inteiro do CPF bater é porque é um CPF válido.
 *  705.484.450-52 === 705.484.450-52 -> true
 */

// Como remover os pontos e outras coisas que não são números:
// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, ''); // /\D+/g isso representa "tudo que não for número", ou seja, tudo que não for número, dá um replace pra ''.
// console.log(cpfLimpo);

// ----------------------- SOLUÇÃO-- -----------------------------

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;   
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
        
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0)
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}