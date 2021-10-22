const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


// Cria um li (do html) e retorna o mesmo, que nada mais é do que ir mostrando a lista das tarefas que estão sendo criadas:
function criaLi() {
    const li = document.createElement('li');
    return li;
}

// Criando um evento que quando o "Enter" for pressionado, após ser digitada a tarefa, o JS o adicione à lista de tarefas.
inputTarefa.addEventListener('keypress', (e) => {
    // console.log(e); // O console.log() no e (evento), serve para descobrir qual é o código da tecla "Enter". O keyCode da tecla Enter é o 13.
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

// Criando uma função para limpar o texto do input depois de ter adicionado a tarefa.
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus(); // método para o cursor voltar e piscar no campo do formulário.
}

// Criando uma função para criar o botaõ Apagar ao lado da tarefa adicionada.
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar'); // Para manioular o botão, poderiamos atribuir uma classe à ele, mas vamos usar o setAtribute ao invés de usar o classList.
    botaoApagar.setAttribute('class', 'apagar'); // Aqui definimos o botaoApagar como uma classe e já nomeamos a mesma como 'apagar'.
    botaoApagar.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(botaoApagar); // botaoApagar agora pe filha da li.
}

// Insere o texto digitado pelo usuário dentro de uma li(item da lista de tarefas)
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li); // li agora é filha da classe tarefas.
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

// Pegando o valor do campo que será adicionado quando clicado no botão. E corrigindo para que quando nada for digitado, que o JS não adicione essa "tarefa". E adicionando o que for colocado ali na função de criar uma tarefa.
btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

// Adicionando a funcionalidade de apagar ao botão.
document.addEventListener('click', (e) => {
    const elemento = e.target; // Para verificarmos em que parte da página o usuário clicou.
    if (elemento.classList.contains('apagar')) { // Se esse botão contém a classe apagar, ou seja, se o usuário está clicando no botão apagar
        elemento.parentElement.remove(); // Selecionando o parent do botão e fazendo com que ele seja apagado. Assim, tudo será apagado.
        salvarTarefas(); // Para que seja apagado do banco de dados também, no localStorage.
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON); // Aqui é o local de onde iremos recuperar esses dados, onde só podemos salvar strings, por isso a conversão para JSON.
    // Jogamos as tarefas para dentro de um array, pois, queremos que seja criado um JSON, que será uma string
}

// Função para ler as tarefas e jogar elas de volta para a Web, para quando atualizarmos a página, elas continuem lá.
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Tornando em array novamente.
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
function adicionaTarefasSalvas();