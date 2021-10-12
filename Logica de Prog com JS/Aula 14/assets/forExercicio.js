const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const back = estilosBody.backgroundColor;

for (let p of ps) { // Colocar a cor do background no background dos parágrafos.
    p.style.backgroundColor = back;
    p.style.color = '#FFFFFF';
}