try {
    // É executada quando nãohá erros.
} catch (e){
    // É executada quando há erros.
} finally {
    // É executada sempre.
}

// Exemplo de tratamento de erro

function retornaHora (data) {
    if (data && !(data instanceof Date)) { // Se o parametro data não for uma data válida.
        throw new TypeError('Esperando instância Date');
    }
    if (!data) {
        data = new Date(); // Se não for informada nenhuma data, o JS gera uma através da função new Date
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false // Para transformar a hora de 1 a 24 e não de 12 em 12.
    });
}

try {
    const novaData = new Date('05-05-1990 13:45:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // Tratar o erro.
} finally {
    console.log('Tenha um bom dia!');
}