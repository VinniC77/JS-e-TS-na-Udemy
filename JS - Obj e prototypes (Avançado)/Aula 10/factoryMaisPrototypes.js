// Factory Function
function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`);
        },

        comer() {
            console.log(`${this.nome} está comendo.`);
        },

        beber() {
            console.log(`${this.nome} está bebendo.`);
        }
    }
    // Agora vamos linkar esse prototype ao objeto que estamos criando:
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
    // Agora todas as pessoas que forem criadas, utilizarão esses métodos linkados do prototype sem precisar estar acoplados aos objetos.
}

const p1 = criaPessoa('Vinicius', 'Clunc');
const p2 = criaPessoa('Jessica', 'Mailai');
p2.comer();