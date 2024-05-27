function exibeMensagemNaOrdem(mensagem, callback) {
    console.log(mensagem);
    callback();
}

exibeMensagemNaOrdem("Oi Guilherme, ", function() {
    console.log("tudo bem?");
});