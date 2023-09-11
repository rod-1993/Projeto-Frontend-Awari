var modal = document.getElementById('formulario');

//criando funções ao clicar no botão (btnReservar1.onclick) ele mudará o formulario (var "modal"), trocando o display do seu estilo (style.display) de "none" para "block"
var btnReservar1 = document.getElementById('reservar-prod-1');
btnReservar1.onclick = function() {
    modal.style.display = 'block';
}

var btnReservar2 = document.getElementById('reservar-prod-2');
btnReservar2.onclick = function() {
    modal.style.display = 'block';
}

var btnReservar3 = document.getElementById('reservar-prod-3');
btnReservar3.onclick = function() {
    modal.style.display = 'block';
}

//criando função ao clicar no botão de fechar(span.onclick) ele mudará o formulario (var "modal"), trocando o display do seu estilo (style.display) de "block" para "none"
//neste caso utilizando getElementsByClassName que busca por class no html, porém depende da posição da class (neste caso, posição 0)
var span = document.getElementsByClassName('fechar')[0];
span.onclick = function() {
    modal.style.display = 'none';
}

//criando função ao clicar no botão de enviar(btnEnviar.onclick) ele mudará o formulario (var "modal"), trocando o display do seu estilo (style.display) de "block" para "none", assim como o anterior
var btnEnviar = document.getElementById('enviar');
btnEnviar.onclick = function() {
    modal.style.display = 'none';
}


//criando função ao clicar na tela, fora do formulario(modal), ele tbm se fechará
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = 'none'; 
    }
}