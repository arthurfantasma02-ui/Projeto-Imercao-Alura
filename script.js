let cardContainer;


let dados = [];
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("botao-busca");

async function carregarDados() {
    let resposta = await fetch ("data.json");
    dados = await resposta.json();

    renderizarCards(dados);
}; 

function buscar() {
    
    const termoBusca = searchInput.value.trim().toLowerCase();

    // Filtra o array 'dados'
    const resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer = document.querySelector(".card-container");
    cardContainer.innerHTML = "";
    for ( let dado of dados) {
         let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank" class="card-link">Saiba Mais</a>
        `;
        cardContainer.appendChild(article);
    }
}

searchButton.addEventListener("click", buscar);


searchInput.addEventListener("input", buscar);

carregarDados();