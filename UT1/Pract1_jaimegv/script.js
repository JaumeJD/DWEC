"use strict"

//VARIABLES QUE SE VAN A USAR DURANTE EL JUEGO.
let contJ1 = 0, contJ2 = 0, contJugadas = 0, contEmpate = 0, jugador1 = "", jugador2 = ""

//FUNCION QUE COMPRUEBA QUE LA JUGADA SEA VALIDA, DEVUELVE TRUE O FALSE.
let validarJugada = (jugador) => {

    if (jugador != "piedra" && jugador != "papel" && jugador != "tijera") {
        alert("Tiene que ser una jugada válida (Pieda, papel o tijera).")
        return false
    }
    return true
}

//FUNCION QUE COMPRUEBA Y MUESTRA QUIEN HA GANADO LA RONDA.
let comprobarRonda = (jugador1, jugador2) => {

    if ((jugador1 == "piedra" && jugador2 == "tijera") || (jugador1 == "papel" && jugador2 == "piedra") || (jugador1 == "tijera" && jugador2 == "papel")) {
        contJ1++
        console.log(`RONDA PARA EL JUGADOR 1.`)

    } else if ((jugador2 == "piedra" && jugador1 == "tijera") || (jugador2 == "papel" && jugador1 == "piedra") || (jugador2 == "tijera" && jugador1 == "papel")) {
        contJ2++
        console.log(`RONDA PARA EL JUGADOR 2.`)
    } else {
        contEmpate++
        console.log(`TENEMOS UN EMPATE.`)
    }
}

//FUNCION QUE MUESTRA LAS ESTADISTICAS DURANTE LA PARTIDA.
let estadisticas = (contJugadas, contJ1, contJ2, contEmpate) => {

    console.log(`Número de jugadas: ${contJugadas} 
    \nJugadas ganadas por J1: ${contJ1} 
    \nJugadas ganadas por J2: ${contJ2} 
    \nJugadas empatadas: ${contEmpate}
    \n_________________________`)

}

//FUNCION QUE COMPRUEBA Y MUESTRA AL VENCEDOR DEL JUEGO.
let ganador = (contJ1) => {

    if (contJ1 == 5) {
        return `¡EL JUGADOR 1 SE LLEVA LA VICTORIA!`
    }

    return `¡EL JUGADOR 2 SE LLEVA LA VICTORIA!`
}


/*                                      ¡¡¡¡¡¡¡¡¡¡INICIO DEL JUEGO!!!!!!!!!!                                        */
console.log("PIEDRA, PAPEL Y TIJERA \n_________________________")

do {
    do {

        jugador1 = prompt("Jugador 1\nIntroduce tu jugada:").toLocaleLowerCase().trim()

    } while (!validarJugada(jugador1));

    do {

        jugador2 = prompt("Jugador 2\nIntroduce tu jugada:").toLocaleLowerCase().trim()

    } while (!validarJugada(jugador2));

    contJugadas++
    comprobarRonda(jugador1, jugador2)
    estadisticas(contJugadas, contJ1, contJ2, contEmpate)

} while (contJ1 < 5 & contJ2 < 5);

console.log(ganador(contJ1))