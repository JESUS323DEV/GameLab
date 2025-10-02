//Mini juego Piedra Papel o Tijeras

//capturamos IMG-PUÑOS

let imgPuño1 = document.querySelector("#imgPuño1");
let imgPuño2 = document.querySelector("#imgPuño2");

//capturamos IMG-BOTONES 
let imgBtnPiedra = document.querySelector("#imgBtnPiedra");
let imgBtnPapel = document.querySelector("#imgBtnPapel");
let imgBtnTijeras = document.querySelector("#imgBtnTijeras");

//capturamos texto 
let resultado1 = document.querySelector(".resultado1")
let puntosMaquina = document.querySelector(".puntosMaquina");
let puntosJugador = document.querySelector(".puntosJugador");
let contador = document.querySelector(".contador")
let puntosGanar = 0;
let puntosPerder = 0;



//evento si el jugador elige piedra 

imgBtnPiedra.addEventListener("click", okPiedra);
function okPiedra() {

    let contador = 2;

    //creamos un contador entre 0 y 2 (0 incluido)
    let pptRandom = Math.floor(Math.random() * 3);
    console.log("Máquina eligió:", pptRandom);
    console.log("Intentos", contador);

    let jugador = 0;


    if (pptRandom === jugador) {
        resultado1.textContent = "Empate 😐";
        imgPuño2.style.animation = "none";
        imgPuño1.style.animation = "none";
        resetPuños()


    } else if (pptRandom === 1) {
        resultado1.textContent = "Perdiste 😭 ";
        puntosPerder++;
        contador--;

        puntosMaquina.textContent = "Puntos de la Maquina: " + puntosPerder;
        imgPuño1.src = "/media/img/papel-btn.png"
        imgPuño1.style.animation = "none";
        imgPuño2.style.animation = "none";
        resetPuños();


    } else {
        resultado1.textContent = "Ganaste 😎";
        puntosGanar++;
        puntosJugador.textContent = "Puntos del jugador: " + puntosGanar;
        imgPuño1.src = "/media/img/tijeras-btn.png";
        imgPuño1.style.animation = "none";
        imgPuño1.style.transform = "scaleX(-1)";
        imgPuño2.style.animation = "none";
        resetPuños()
    }

}








function resetPuños() {

    setTimeout(() => {
        // volver a las imágenes de puño cerrado
        imgPuño1.src = "/media/img/puño2.png"; // jugador
        imgPuño2.src = "/media/img/puño.png";  // máquina


        // reactivar las animaciones
        imgPuño1.style.animation = "golpeteo1 0.6s infinite alternate";
        imgPuño2.style.animation = "golpeteo2 0.6s infinite alternate";

        imgPuño1.style.transform = "scaleX(1)";
        imgPuño2.style.transform = "scaleX(1)";
        resultado1.textContent = "";
    }, 2000);



}


//evento si el jugador elige papel 

imgBtnPapel.addEventListener("click", okPapel);
function okPapel() {
    //creamos un contador entre 0 y 2 (0 incluido)
    let pptRandom = Math.floor(Math.random() * 3);
    console.log("Máquina eligió:", pptRandom);


    let jugador = 1;

    if (pptRandom === jugador) {
        resultado1.textContent = "Empate 😐";
        imgPuño2.src = "/media/img/papel-btn.png";
        imgPuño2.style.transform = "scaleX(-1)";
        imgPuño2.style.animation = "none";
        imgPuño1.src = "/media/img/papel-btn.png";
        imgPuño1.style.animation = "none";
        resetPuños()

    } else if (pptRandom === 2) {
        resultado1.textContent = "Perdiste 😭";
        puntosPerder++;
        puntosMaquina.textContent = "Puntos de la Maquina: " + puntosPerder;
        imgPuño2.src = "/media/img/papel-btn.png";
        imgPuño2.style.transform = "scaleX(-1)";
        imgPuño2.style.animation = "none";
        imgPuño1.src = "/media/img/tijeras-btn.png";
        imgPuño1.style.transform = "scaleX(-1)";
        imgPuño1.style.animation = "none";
        resetPuños()

    } else {

        resultado1.textContent = "Ganaste 😎";
        puntosGanar++;
        puntosJugador.textContent = "Puntos del jugador: " + puntosGanar;
        imgPuño2.src = "/media/img/papel-btn.png";
        imgPuño2.style.transform = "scaleX(-1)"
        imgPuño2.style.animation = "none";
        imgPuño1.style.animation = "none";
        resetPuños();

    }

}

//evento si el jugador elige tijeras

imgBtnTijeras.addEventListener("click", okTijeras);
function okTijeras() {

    //creamos un contador entre 0 y 2 (0 incluido)
    let pptRandom = Math.floor(Math.random() * 3);
    console.log("Máquina eligió:", pptRandom);

    let jugador = 2;

    if (pptRandom === jugador) {
        resultado1.textContent = "Empate 😐";
        imgPuño2.src = "/media/img/tijeras-btn.png";
        imgPuño2.style.animation = "none";
        imgPuño1.src = "/media/img/tijeras-btn.png";
        imgPuño1.style.animation = "none";
        imgPuño1.style.transform = "scaleX(-1)"
        resetPuños();

    } else if (pptRandom === 0) {
        resultado1.textContent = "Perdiste 😭";
        puntosPerder++;
        puntosMaquina.textContent = "Puntos de la Maquina: " + puntosPerder;
        imgPuño2.src = "/media/img/tijeras-btn.png";
        imgPuño2.style.animation = "none";
        imgPuño1.style.animation = "none";
        resetPuños();


    } else {

        resultado1.textContent = "Ganaste 😎";
        puntosGanar++;
        puntosJugador.textContent = "Puntos del jugador: " + puntosGanar;
        imgPuño2.src = "/media/img/tijeras-btn.png";
        imgPuño2.style.animation = "none";
        imgPuño1.src = "/media/img/papel-btn.png";
        imgPuño1.style.animation = "none";
        resetPuños();

    }
}


//botón siguiente página 

let btnNext = document.querySelector("#btnNext")

btnNext.addEventListener("click", function () {

    window.location.href = "/html/tragaMonedas.html";

})

let btnBackLogin = document.getElementById("btnBackLogin");
btnBackLogin.addEventListener("click", function() {

    window.location.href = "../index.html"
})































