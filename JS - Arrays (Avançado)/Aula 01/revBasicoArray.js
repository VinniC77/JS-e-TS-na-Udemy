//                 0         1          2
const nomes = ['Eduardo', 'Maria', 'Jessica'];
nomes[2] = 'Joao';
console.log(nomes);
delete nomes[2]; // delete remove o item do índice, mas não elimina o indice.
console.log(nomes);
// Isso não acontece se copiássemos os itens do nomes em novo através do spread:
const novo1 = [...nomes];
// Valor por referencia
const novo = nomes; // Agora tudo o que acontece em um, acontece em outro
const removido = novo.pop(); // Podemos jogar o item removido por pop() para dentro de uma variável.
console.log(nomes); // Aqui, retorna o nomes sem o último índice que foi eliminado no método .pop().
console.log(novo1);
console.log(removido);
nomes.push('Jeferson'); // Adiciona o item no final do array.
nomes.unshift('Carla');  // Adiciona o item no começo do array e desloca os demais índices.
console.log(nomes);
const repartir = nomes.slice(1, 3); // Corta os índices que são digitados e os guarda em um novo array, sem incluir o último índice. Não altera o array original.
console.log(repartir);
// Transformando string em arrays
const nome = 'Marcondes da Silva Pereira';
const todos = nome.split(' '); // Dentro dos () é definido o critério para separação dos elementos para dentro do array.
console.log(todos);
// Transformando arrays em string:
const voltaString = todos.join(' ');
console.log(voltaString);