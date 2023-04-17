const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");
const btn_atras1 = document.querySelector(".volver-pag1");
const btn_atras2 = document.querySelector(".volver-pag2");
const btn_adelante3 = document.querySelector(".adelante-pag3");
const btn_Finalizar = document.querySelector(".Enviar");

const progressText =  document.querySelectorAll(".paso p");
const progressCheck =  document.querySelectorAll(".paso .check");
const num =  document.querySelectorAll(".paso .num");

let max = 3;
let cont = 1;

btn_adelante2.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = "-33%";
    num[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    cont += 1;
});

btn_adelante3.addEventListener("click", function(e){
    e.preventDefault();

    movPag.style.marginLeft = "-66%";
});

btn_atras1.addEventListener("click", function(e){
    e.preventDefault();

    movPag.style.marginLeft= "0%"
})

btn_atras2.addEventListener("click", function(e){
    e.preventDefault();

    movPag.style.marginLeft= "-33%"
})

btn_Finalizar.addEventListener("click", function(e){
    e.preventDefault();

    alert("Su reserva ha sido recibida exitosamente")
});