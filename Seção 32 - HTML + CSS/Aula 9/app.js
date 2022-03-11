let hiperlink = document.querySelector('a');

hiperlink.onclick = function(e){
    console.log('Passou o mouse por cima')
    e.preventDefault();
}

hiperlink.addEventListener('onmouseclick', ()=> console.log('O mouse passou também'));