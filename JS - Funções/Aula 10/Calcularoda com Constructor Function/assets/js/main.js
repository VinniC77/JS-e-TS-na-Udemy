function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClique();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.capturaClique = () => {
        document.addEventListener('click', event => {
            const el = event.target; // O botão que está sendo pressionado.
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.addNumDisplay = el => { // Quando só tem 1 elemento no parametro da Arrow function, não precisa dos parênteses.
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => this.display.value += '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia();