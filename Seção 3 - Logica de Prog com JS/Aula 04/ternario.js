// Operação Ternária
// condição ? 'Valor para Verdadeiro' : 'Valor para Falso'

const pontuacaoUsuario = 1001;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

// Operação Ternária:

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);