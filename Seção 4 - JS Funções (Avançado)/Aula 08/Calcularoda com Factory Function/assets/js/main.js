// Será uma factory function (que retorna um objeto.)

function criaCalduladora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() { // Ao pressionar Enter, tem que ser o mesmo que clicar no igual.
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) { // 13 é o keyCode da tecla Enter do teclado.
                    this.realizaConta();
                }
            })
        },

        realizaConta() { // Não se recomenda utilizar o método eval, por segurança. Nesse caso foi usado, pois, o foco é mostrar a utilização das factory functions
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // Aqui é o tamanho da string -1
        },

        cliqueBotoes() { // Para pegarmos os valores "apertados" na calculadora
            document.addEventListener('click', (e) => { // com a Arrow Function o this. não muda, segue sendo a calculadora.
                const el = e.target; // Isso vai pegar o local onde o usuário clicar na tela.
                if (el.classList.contains('btn-num')) { // Isso quer dizer: se o local onde o usuário clicar tem a classe btn-num, ou seja, se ele clicar em um número.
                    this.btnParaDisplay(el.innerText); // Sempre que eu quero referenciar uma chave do meu objeto, dentro do meu objeto, preciso utilizar o this.
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalduladora();
calculadora.inicia();