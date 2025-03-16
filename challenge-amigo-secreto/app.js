//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//Criação do array 
let amigos = [];

//Essa função  adiciona nome de cada amigo inserido.
    function adicionarAmigo() {
          let nomeInput = document.getElementById("amigo");
          let nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    amigos.push(nome);

           let lista = document.getElementById("listaAmigos");
           let li = document.createElement("li");
               li.textContent = nome;
               li.classList.add("name-item"); // Adiciona uma classe caso precise de estilização
    lista.appendChild(li);

         nomeInput.value = ""; // Zera o campo de input
} 

//A função vai solicitar que adicione de valores para sortear.
    function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione 4 amigos antes de sortear!");
        return;
    }

           let sorteado = amigos[Math.floor(Math.random() * amigos.length)];

           let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Zera resultados anteriores

            let li = document.createElement("li");
                li.textContent = "Seu amigo secreto é : " + sorteado + "!";
                li.classList.add("result-item");
    resultadoLista.appendChild(li);
}
