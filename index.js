var SetaDireita = window.document.getElementById("Seta-direita")
var Leornadro = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaEsquerda = window.document.getElementById("Seta-esquerda")

function RolarParaDireita(){
    Leornadro.style = "display:none" 
    Bruna.style = "display:flex"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "dispaly:flex"
}
function RolarParaEsquerda(){
    Bruna.style = "display:none"
    Leornadro.style = "display:flex"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}