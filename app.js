//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function TextosNaTela(tag, _text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = _text;
}

TextosNaTela('h1', 'Sorteie um amigo');
TextosNaTela('h2','Em qual amigo você está pensando?');

// Criando um Array para armazenar os nomes
let amigos = [];

// Função adicionar amigo

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome"); 
        return;
    }

    amigos.push(nome); // Adiciona no array global correto
    input.value = ""; // Limpa o campo de input
    atualizarLista(); // Atualiza a lista de amigos na tela
}



// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (amigos.length === 0) {
        console.warn("Nenhum amigo foi adicionado!");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = "Amigo sorteado: " + sorteado;
}



function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    if (!lista) {
        console.error("Elemento #listaAmigos não encontrado!");
        return;
    }
}

// Agora temo um ótimo jogo! Viva a Alura :)