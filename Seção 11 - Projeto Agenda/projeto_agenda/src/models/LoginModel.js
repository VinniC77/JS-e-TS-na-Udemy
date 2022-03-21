const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = []; // Isso quer dizer que se tiver algum erro nos dados, não posso cadastrar o usuário na base de dados.
        this.user = null;
    }

    async login() {
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email });

        if(!this.user) {
            this.errors.push('O usuário não existe.');
            return;
        }

        if(!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha inválida.');
            this.user = null;
            return;
        }
    }
    
    async register() {
        this.valida();
        if(this.errors.length > 0) return;

        await this.userExists();

        if(this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if(this.user) this.errors.push('Usuário já existe.');

    }

    valida() { 
        this.cleanUp();
        // método que valida se o cadastro do usuario está OK e se pode ser armazenado na base de dados com base nas regras:
        // e-mail precisa ser válido:
        if(!validator.isEmail(this.body.email)) this.errors.push('Você precisa informar um E-mail válido.')

        // senha deve ter entre 3 e 10 caracteres:
        if(this.body.password.length < 3 || this.body.password.length > 10) {
            this.errors.push('A senha precisa ter entre 3 e 10 caracteres.')
        }
    }

    cleanUp() { // Garantir que tudo que tem no .body (campos do formulário) é uma string.
        for(const key in this.body) {
            if(typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;