let dados = [];


async function IniciarBusca() {
    let resposta = await fetch ("data.json");
    resposta = await resposta.json();

    console.log(resposta);
}; 
