// --- Jugador ---
let vidaJugador = document.getElementById("vidaJugador");
let barraVidaJugador = document.querySelector(".barraVidaJugador");
let barraRellenoJugador = document.querySelector(".barraRellenoJugador");
let imgPlayer = document.querySelector(".imgPlayer");
// --- textos jugador ---
let jugadorVida = document.querySelector(".jugadorVida");
let jugadorSuperEfec = document.querySelector("#vidaJugador .superEfec");
let jugadorNoEsEfec = document.querySelector("#vidaJugador .noEsEfec");
let jugadorEfectivo = document.querySelector("#vidaJugador .efectivo");

// --- Máquina ---
let vidaMaquina = document.getElementById("vidaMaquina");
let barraVidaMaquina = document.querySelector(".barraVidaMaquina");
let barraRellenoMaquina = document.querySelector(".barraRellenoMaquina");
let imgMaquina = document.querySelector(".imgMaquina");
// --- texto maquina ---
let maquinaVida = document.querySelector(".maquinaVida");
let maquinaSuperEfec = document.querySelector("#vidaMaquina .superEfec");
let maquinaNoEsEfec = document.querySelector("#vidaMaquina .noEsEfec");
let maquinaEfectivo = document.querySelector("#vidaMaquina .efectivo");

// --- Ataques (radios) ---
let attackFuego = document.getElementById("attackFuego");
let attackAgua = document.getElementById("attackAgua");
let attackPlanta = document.getElementById("attackPlanta");

// --- Botón ---
let btnAttack = document.getElementById("btnAttack");
let btnNextTurno = document.getElementById("btnNextTurno");
//Botones next/back
let btnNext = document.getElementById("btnNext");
let btnBack = document.getElementById("btnBack");
let btnBackLogin = document.getElementById("btnBackLogin");

// --- creamos array ---
let ataques = ["fuego", "agua", "planta"]

// --- vidas ---
let vidaJugadorCount = 100;
let vidaMaquinaCount = 100;

// --- texto vida ---
jugadorVida.textContent = "Vida: " + vidaJugadorCount;
maquinaVida.textContent = "vida : " + vidaMaquinaCount;


//daño normal
let dañoNormal = 5;
//daño super de JUGADOR y maquina 
let dañoSuperJugador = 10;
let dañoSuperMaquina = 10;

//daño efectivo de JUGADOR y maquina 
let dañoNoEfectivoJugador = 3;
let dañoNoEfectivoMaquina = 3;
//turno jugador
let turnoJugador = "jugador";

//turno maquina
let turnoMaquina = "maquina";



btnNextTurno.disabled = true;


// ---FUNCIÓN ATAQUE JUGADOR ---
btnAttack.addEventListener("click", function () {

    // ---DEFENSA RANDOM DE LA MAQUINA ---
    const defensaSlim = ataques[Math.floor(Math.random() * ataques.length)];
    // radio seleccionado
    let radioSelect = document.querySelector("input[name='ataqueName']:checked");

    if (radioSelect) {

        //=================TURNO DEL JUGADOR=================================
        if (radioSelect && turnoJugador === "jugador") {

            console.log("🧙‍♂️ El Mago se prepara para atacar...");
            setTimeout(() => {


                let ataqueSelect = radioSelect.value;
                //EMPATE - DAÑO NORMAL
                if (ataqueSelect === defensaSlim) {
                    let critico = probCritico();
                    let dañoTotal = dañoNormal + critico;


                    //RESTA PH DEL DAÑO TOTAL A LA MAQUINA
                    vidaMaquinaCount -= dañoTotal;

                    // 🔥 Mensaje del jugador al log
                    agregarLogJugador("🧙‍♂️ El Mago lanzó un ataque de " + ataqueSelect +
                        ". Fue un ataque normal e hizo " + dañoTotal + " puntos de daño a Slim.");


                    //TEXTO DE DAÑOS MÁQUINA
                    agregarLogMaquina("🛡️ Slim intentó defenderse con un escudo de " + defensaSlim +
                        ", pero recibió " + dañoTotal + " puntos de daño.")

                    //TEXTO ACTUALIZAR VIDA JUGADOR
                    jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
                    barraRellenoJugador.style.width = vidaJugadorCount + "%";

                    //TEXTO ACTUALIZAR VIDA MAQUINA
                    maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
                    barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

                    // Cambiar color según la vida
                    vida0()

                    //log
                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect)
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim)

                    console.log("🧙‍♂️ DAÑO NORMAL: " + dañoNormal);
                    console.log("✨ Crítico: " + critico);
                    console.log("⚔️ DAÑO TOTAL = " + dañoNormal + " + " + critico + " = " + dañoTotal);
                    console.log("🧙‍♂️ Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("👾 Vida máquina → " + vidaMaquinaCount);
                    console.log("==================================================================")


                    //GAnA EL JUGADOR - DAÑO SUPER-EFECTIVO
                } else if ((ataqueSelect === "agua" && defensaSlim === "fuego") ||
                    (ataqueSelect === "fuego" && defensaSlim === "planta") ||
                    (ataqueSelect === "planta" && defensaSlim === "agua")) {

                    let critico = probCritico();
                    let dañoTotal = dañoSuperJugador + critico;


                    //RESTA PH DEL DAÑO TOTAL A LA MAQUINA
                    vidaMaquinaCount -= dañoTotal;


                    //TEXTO DE DAÑOS JUGADOR
                    agregarLogJugador("🧙‍♂️ El Mago lanzó un ataque de " + ataqueSelect +
                        ". ¡Fue SÚPER EFECTIVO! y causó " + dañoTotal + " puntos de daño a Slim! 💥");

                    //TEXTO DE DAÑOS MÁQUINA
                    agregarLogMaquina("🛡️ Slim intentó defenderse con un escudo de " + defensaSlim +
                        ", pero el golpe fue ¡SÚPER EFECTIVO! y recibió " + dañoTotal + " puntos de daño.");

                    //TEXTO ACTUALIZAR VIDA Jugador
                    jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
                    barraRellenoJugador.style.width = vidaJugadorCount + "%";

                    //TEXTO ACTUALIZAR VIDA MAQUINA
                    maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
                    barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

                    // Cambiar color según la vida
                    vida0()

                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect)
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim)

                    console.log("🧙‍♂️ DAÑO SUPER-EFECTIVO: " + dañoSuperJugador);
                    console.log("✨ Crítico: " + critico);
                    console.log("⚔️ Fórmula → " + dañoSuperJugador + " + " + critico + " = " + dañoTotal);

                    console.log("🧙‍♂️ Vida máquina → " + vidaMaquinaCount);
                    console.log("👾 Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("==================================================================")

                    //GANA LA MAQUINA DAÑO BAJO
                } else {
                    let critico = probCritico();
                    let dañoTotal = dañoNoEfectivoJugador + critico;

                    //RESTA PH DEL DAÑO TOTAL A LA MAQUINA
                    vidaMaquinaCount -= dañoTotal;

                    //TEXTO DE DAÑOS JUGADOR

                    agregarLogJugador("🧙‍♂️ El Mago lanzó un ataque de " + ataqueSelect +
                        ", pero no fue muy efectivo... solo causó " + dañoTotal + " puntos de daño.");


                    //TEXTO DE DAÑOS MÁQUINA

                    agregarLogMaquina("🛡️ Slim levantó un escudo de " + defensaSlim +
                        " y logró reducir el daño. Solo recibió " + dañoTotal + " puntos.");

                    //TEXTO ACTUALIZAR VIDA jugador
                    jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
                    barraRellenoJugador.style.width = vidaJugadorCount + "%";


                    //TEXTO ACTUALIZAR VIDA MAQUINA
                    maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
                    barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

                    // Cambiar color según la vida
                    vida0()



                    console.log("🧙‍♂️ MAGO ELIGIÓ ATAQUE DE " + ataqueSelect)
                    console.log("🤖🛡️  Maquina eligió escudo de " + defensaSlim)

                    console.log("🧙‍♂️ DAÑO BAJO: " + dañoNoEfectivoJugador);
                    console.log("✨ Crítico: " + critico);
                    console.log("⚔️ Fórmula → " + dañoNoEfectivoJugador + " + " + critico + " = " + dañoTotal);

                    console.log("🧙‍♂️ Vida máquina → " + vidaMaquinaCount);
                    console.log("👾 Vida jugador → " + vidaJugadorCount + " (se mantiene)");
                    console.log("==================================================================")


                }
                turnoJugador = "maquina"

                btnAttack.disabled = true;
                btnNextTurno.disabled = false;
                radioSelect.checked = false;
                mostrarEscudos()

            }, 1000);




        }
    }
});

//====================================TURNO DE LA MAQUINA ==========================

//FUNCIÓN ATAQUE MAQUINA
function ataqueMaquina() {

    setTimeout(() => {

        console.log("🤖 La maquina esta pensado...")

        //ATAQUE RANDOM SLIM
        const ataqueSlim = ataques[Math.floor(Math.random() * ataques.length)];

        //FUNCIÓN ELEGIR ESCUDOS
        let defensaMago = document.querySelector("input[name='ataqueName']:checked");

        if (defensaMago) {
            defensaMago = defensaMago.value;
        } else {

            alert("selecciones un escudo")
            return;

        }




        //DAÑÓ NORMAL DEL SLIM
        if (ataqueSlim === defensaMago) {

            let critico = probCritico();
            let dañoTotal = dañoNormal + critico;


            //RESTA PH DEL DAÑO TOTAL AL JUGADOR
            vidaJugadorCount -= dañoTotal;

            //TEXTO MAQUINA
            agregarLogMaquina("👾 Slim lanzó un ataque de " + ataqueSlim +
                ". Fue un golpe normal e hizo " + dañoTotal + " puntos de daño al Mago.");
            //TEXTO JUGADOR
            agregarLogJugador("🛡️ El Mago levantó un escudo de " + defensaMago +
                " y redujo el impacto. Solo recibió " + dañoTotal + " puntos de daño.");

            //TEXTO ACTUALIZAR VIDA MAQUINA
            maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
            barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

            //TEXTO ACTUALIZAR VIDA JUGADOR
            jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
            barraRellenoJugador.style.width = vidaJugadorCount + "%";

            // Cambiar color según la vida
            vida0()




            //LOG
            console.log("👾 SLIM ELIGIÓ ATAQUE DE " + ataqueSlim);
            console.log("🧙‍♂️🛡️ la defensa del mago es " + defensaMago);


            console.log("👾 Daño NORMAL de Slim: " + dañoNormal);
            console.log("✨ Crítico: " + critico);
            console.log("⚔️ Fórmula → " + dañoNormal + " + " + critico + " = " + dañoTotal);

            console.log("🧙‍♂️ Vida jugador (después del ataque) → " + vidaJugadorCount);
            console.log("👾 Vida máquina → " + vidaMaquinaCount + " (se mantiene)");
            console.log("==================================================================")


            //DAÑO SUPER-EFECTIVO
        } else if ((ataqueSlim === "agua" && defensaMago === "fuego") ||
            (ataqueSlim === "fuego" && defensaMago === "planta") ||
            (ataqueSlim === "planta" && defensaMago === "agua")) {

            let critico = probCritico();
            let dañoTotal = dañoSuperMaquina + critico;

            //RESTA PH DEL DAÑO TOTAL AL JUGADOR
            vidaJugadorCount -= dañoTotal;

            //TEXTO MAQUINA 
            agregarLogMaquina("👾 Slim desató un ataque de " + ataqueSlim +
                " ¡Fue SÚPER EFECTIVO! El Mago recibió " + dañoTotal + " puntos de daño. 💥");

            //TEXTO JUGADOR
            agregarLogJugador("🛡️ El Mago intentó protegerse con un escudo de " + defensaMago +
                ", pero el golpe fue ¡SÚPER EFECTIVO! Recibió " + dañoTotal + " puntos de daño.");

            //TEXTO ACTUALIZAR VIDA MAQUINA
            maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
            barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

            //TEXTO ACTUALIZAR VIDA JUGADOR
            jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
            barraRellenoJugador.style.width = vidaJugadorCount + "%";

            // Cambiar color según la vida
            vida0()

            //LOG
            console.log("👾 SLIM ELIGIÓ ATAQUE DE " + ataqueSlim);
            console.log("🧙‍♂️🛡️ la defensa del mago es " + defensaMago);
            console.log("👾 Daño SUPER EFECTIVO: " + dañoSuperMaquina);
            console.log("✨ Crítico: " + critico);


            console.log("🧙‍♂️ Vida del Mago (después del ataque) → " + vidaJugadorCount);
            console.log("👾 Vida de Slim → " + vidaMaquinaCount + " (se mantiene)");

            console.log("==================================================================")



        } else {

            let critico = probCritico();
            let dañoTotal = dañoNoEfectivoMaquina + critico;

            //RESTA PH DEL DAÑO TOTAL A LA MAQUINA
            vidaJugadorCount -= dañoTotal;

            //TEXT MAQUINA
            agregarLogMaquina("👾 Slim atacó con " + ataqueSlim +
                ", pero no fue muy efectivo... El Mago solo recibió " + dañoTotal + " puntos de daño.");
            //TEXT JUGADOR
            agregarLogJugador("🛡️ El Mago levantó un escudo de " + defensaMago +
                ". El ataque no fue muy efectivo y solo recibió " + dañoTotal + " puntos de daño.");

            //TEXTO ACTUALIZAR VIDA MAQUINA
            maquinaVida.textContent = "Vida Actual: " + vidaMaquinaCount;
            barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

            //TEXTO ACTUALIZAR VIDA JUGADOR
            jugadorVida.textContent = "Vida Actual: " + vidaJugadorCount;
            barraRellenoJugador.style.width = vidaJugadorCount + "%";


            // Cambiar color según la vida
            vida0()



            //LOG

            console.log("👾 SLIM ELIGIÓ ATAQUE DE " + ataqueSlim);
            console.log("🧙‍♂️🛡️ la defensa del mago es " + defensaMago);
            console.log("👾 DAÑO NO EFECTIVO: " + dañoNoEfectivoMaquina);
            console.log("✨ Crítico: " + critico);
            console.log("⚔️ Fórmula → " + dañoNoEfectivoMaquina + " + " + critico + " = " + dañoTotal);

            console.log("🧙‍♂️ Vida jugador (después del ataque) → " + vidaJugadorCount);
            console.log("👾 Vida Slim → " + vidaMaquinaCount + " (se mantiene)");
            console.log("==================================================================")



        }

        turnoJugador = "jugador"

        btnAttack.disabled = false;
        btnNextTurno.disabled = true;
        mostrarAtaques()
        document.querySelectorAll("input[name='ataqueName']").forEach(radio => {
            radio.checked = false;
        });

    }, 1000);
}


//FUNCIONES


//BTN TERMINAR TURNO
btnNextTurno.addEventListener("click", () => {
    if (turnoJugador === "maquina") {
        ataqueMaquina();
    }
});
//PROBABILIDAD DE CRITICO
function probCritico() {

    let dañoCritico = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    return dañoCritico;

}


//AGREGAR Y GUARDAR ATAQUES JUGADOR
function agregarLogJugador(mensaje) {
    const log = document.getElementById("logJugador");

    // Si ya hay 2 mensajes, borra el más viejo
    while (log.children.length >= 2) {
        log.removeChild(log.firstChild);
    }

    const p = document.createElement("p");
    p.textContent = mensaje;
    log.appendChild(p);
}
//AGREGAR Y GUARDAR ATAQUES MAQUINA
function agregarLogMaquina(mensaje) {
    const log = document.getElementById("logMaquina");


    while (log.children.length >= 2) {
        log.removeChild(log.firstChild);
    }

    const p = document.createElement("p");
    p.textContent = mensaje;
    log.appendChild(p);

}


//COLORES DE VIDA
function vida0() {
    //  Asegurarse de que las vidas no bajen de 0
    if (vidaJugadorCount < 0) vidaJugadorCount = 0;
    if (vidaMaquinaCount < 0) vidaMaquinaCount = 0;

    //Ajustar ancho de barras según vida actual
    barraRellenoJugador.style.width = vidaJugadorCount + "%";
    barraRellenoMaquina.style.width = vidaMaquinaCount + "%";

    // Cambiar colores según rango de vida (jugador)
    if (vidaJugadorCount > 60) {
        barraRellenoJugador.style.backgroundColor = "green";
    } else if (vidaJugadorCount > 30) {
        barraRellenoJugador.style.backgroundColor = "orange";
    } else {
        barraRellenoJugador.style.backgroundColor = "red";
    }

    //Cambiar colores según rango de vida (máquina)
    if (vidaMaquinaCount > 60) {
        barraRellenoMaquina.style.backgroundColor = "green";
    } else if (vidaMaquinaCount > 30) {
        barraRellenoMaquina.style.backgroundColor = "orange";
    } else {
        barraRellenoMaquina.style.backgroundColor = "red";
    }

    // barra gris (pisar color anterior)
    if (vidaJugadorCount === 0) {
        barraRellenoJugador.style.backgroundColor = "gray";
    }
    if (vidaMaquinaCount === 0) {
        barraRellenoMaquina.style.backgroundColor = "gray";
    }
}

//==============MOSTRAR/OCULTAR IMG ESCUDOS Y ATAQUES============================

//FUNCIONES MOSTRAR ESCUDOS OCULTAR ATAQUES
// mostrar escudos
function mostrarEscudos() {
    document.querySelectorAll(".imgEscudos").forEach(img => {
        img.classList.remove("d-none");


        document.querySelector(".fuego").textContent = "Escudo de Fuego";
        document.querySelector(".agua").textContent = "Escudo de Agua";
        document.querySelector(".planta").textContent = "Escudo de Planta"
        btnAttack.classList.add("d-none");      // ocultar atacar
        btnNextTurno.classList.remove("d-none");  // mostrar defensa

    });







    document.querySelectorAll(".imgAtaques").forEach(img => {
        img.classList.add("d-none"); // ocultar ataques
    });
}


//FUNCIONES OCULTAR ESCUDOS MOSTRAR ATAQUES

function mostrarAtaques() {
    // mostrar ataques
    document.querySelectorAll(".imgAtaques").forEach(img => {

        img.classList.remove("d-none");
    });

    document.querySelector(".fuego").textContent = "Ataque de Fuego";
    document.querySelector(".agua").textContent = "Ataque de Agua";
    document.querySelector(".planta").textContent = "Ataque de Planta";
    btnAttack.classList.remove("d-none");
    btnNextTurno.classList.add("d-none");

    document.querySelectorAll(".imgEscudos").forEach(img => {

        img.classList.add("d-none");
    })

}




//BTN LOGIN
btnBackLogin.addEventListener("click", function () {

    window.location.href = "../index.html"
})

//BTN NEXT
btnNext.addEventListener("click", function () {
    window.location.href = "";
})

//BTN BACK
btnBack.addEventListener("click", function () {
    window.location.href = "tragaMonedas.html";
})


