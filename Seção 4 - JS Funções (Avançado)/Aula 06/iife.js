// Funções imediatas - IIFE Immediately Invoked Function Expression
// Usamos para criar funções que "fujam" do esoopo global.

function qualquerCoisa() {
    console.log(12312);
}
qualquerCoisa(); // Nesse caso a função toca o escopo global.

// Para criarmos uma função que é invocada automaticamente quando esta é criada, podemos envolvê-la entre parênteses.
(function(){
    console.log(123456); // Nada que está aqui dentro toca o escopo global.
    const idade = 30;
})(); // Aqui, ao terminar a função, já executamos a mesma ao abrir e fechar os parênteses no final.

(function(idade, peso, altura) {
    const sobrenome = 'Clunc';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }
    function falaNome() {
        console.log(criaNome('Vini'));
    }
    falaNome();
    console.log(`Tenho ${idade} anos, ${peso} kilos e ${altura} de altura.`);
})(30, 83, 1.82); // Aqui já passamos os parâmetros da auto-invocação da função.

// A única diferença de uma função normal é que a declaramos dentro de parênteses.