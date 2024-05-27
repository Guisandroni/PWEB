const prompt = require("prompt-sync")();
function saudacao(nome) {
    console.log("Oi " + nome);
}

function entradaNome(callback) {
    var nome = prompt("Digite o seu nome: ");
    callback(nome);
}

entradaNome(saudacao);