const numero = Number(prompt('Digite um numero:')); // Método prompt sempre retorna uma string
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero; // atribuindo ao span numeroTitulo o que o usuário digitou no prompt

texto.innerHTML = 'teste';
texto.innerHTML += `<p>A raiz quadrada de ${numero} é ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>O número ${numero} é inteiro: ${Number(IsInteger(numero))}.</p>`;
texto.innerHTML += `<p>É NaN: ${isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
