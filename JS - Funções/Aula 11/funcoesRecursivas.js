// Função recursiva é quando ela mesma se chama. Algo similar ao que as estruturas de repstição while, for, etc fazem.

function recursiva(max) { // Exemplo de função recursiva.
    if (max >= 10) return; // Quando o número for maior ou igual a 10, ela para.
    max++; // incrementador necessário para não dar um looping infinito na função.
    console.log(max);
    recursiva(max); // A função executa o código dela e se chama de volta.
}

recursiva(0);