var nome = document.getElementById('nome');
var cor = document.querySelector('#cor');
var botao = document.querySelector('#btn');
var titulo = document.querySelector('#titulo');

cor.addEventListener('change', function(){
    //alert(cor.value);
    meufundo.style.background = cor.value
});

botao.addEventListener('click', function(e){
    e.preventDefault();
    alert("Bem vindo " + nome.value);
});

window.onload = function(){
       var corFav = prompt("Qual a sua cor favorita?");
       var px = prompt("Digite um valor de posição eixo X:");
    var py = prompt("Digite um valor de posição eixo Y:");

        var alvo = document.querySelector('#alvo');

        alvo.style.background = corFav
        alvo.style.marginLeft = px + "vw";
        alvo.style.marginTop = py + "vh";
}