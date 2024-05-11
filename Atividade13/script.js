const janela = document.getElementById('janela');
const estado = document.getElementById('state');

window.addEventListener('load', function() {
    janela.src = 'closed.jpg';
    estado.innerText = 'Abra a Janela';
})

janela.addEventListener('mouseout', function() {
    janela.src = 'closed.jpg';
    estado.innerText = 'Janela Fechada';
});

janela.addEventListener('mouseover', function() {
    janela.src = 'open.jpg';
    estado.innerText = 'Janela Aberta';
});

janela.addEventListener('click', function() {
    janela.src = 'broken.jpg';
    estado.innerText = 'Janela Quebrada';
});