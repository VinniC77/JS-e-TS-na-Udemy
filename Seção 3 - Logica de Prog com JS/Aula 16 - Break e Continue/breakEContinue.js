const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) { // Utlizamos o "for of" porque queremos que sejam exibidos os valores.
    if (numero === 2 || numero === 5) { // Assim o JS pula a iteração quando encontrar o número 2 e o 5.
        continue;
    }

    // o break economiza desempenho do computador, pois, pára a execução do programa, quando encontra o que estava sendo procurado.
    console.log(numero);
    if (numero === 7) {
        break
    }
}

// A diferença é que com o continue o JS segue para a próxima iteração. Com o break, assim que o JS encontrar a condição, ele sai do laço de repeticão.