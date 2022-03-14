const ajax = obj => { // função para fazer requisições
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // xhr significa XML Http Request
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    })
}

// Agora vamos capturar os eventos dos cliques.
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href
    };

    const response = await request(objConfig);
    carregaResultado(response);
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// Escrevendo a função inteira, utulizado o Fetch API

fetch('pagina1.html')
    .then(resposta => {
        if(resposta.status !== 200) {
            throw new Error('ERRO 404 NOSSO');
        return resposta.text();
        }
    })
    .then(html => console.log(html))
    .catch(e => console.log(e));