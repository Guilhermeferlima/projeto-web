function lermais(){
    var pontos=document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var btnlermais=document.getElementById("btnlermais");

    if (pontos.style.display === "none"){
        pontos.style.display = "inline";
        maisTexto.style.display= "none";
        btnlermais.innerHTML="Ler mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display= "inline";
        btnlermais.innerHTML="Ler menos";
    }
}