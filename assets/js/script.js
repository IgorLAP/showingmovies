setTimeout(()=>{
    req();
}, 1000);
async function req(){
    let url = await fetch('https://api.b7web.com.br/cinema/');
    let json = await url.json();
    montar(json);
}
function montar(lista){
    let html = '';
    for(let i in lista){
        html += `<div class="col-md-4"><div class="filme"><img src="${lista[i].avatar}" alt="Cartaz: ${lista[i].titulo}" />${lista[i].titulo}</div></div>`;
    }
    document.querySelector('.filmes').innerHTML = html;
}