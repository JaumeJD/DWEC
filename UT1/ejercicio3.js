"use strict";

/**
 * Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
 */

let hora, minuto, segundo, inicio, arrayInicio;

inicio = prompt("Introduce la hora inicial:", "HH:MM:SS")
arrayInicio = inicio.split(":")
hora = parseInt(arrayInicio[0])
minuto = parseInt(arrayInicio[1])
segundo = parseInt(arrayInicio[2])

console.log(`Hora inicial: ${hora}:${minuto}:${segundo}`)

segundo += 1

if (segundo == 60) {

    segundo = 0
    minuto += 1

    if (minuto == 60) {
        minuto = 0
        hora += 1

        if (hora == 24) {
            hora = 0
        }
    }
}

console.log(`Un segundo después: ${(hora < 10 ? "0" + hora : hora)}:${(minuto < 10 ? "0" + minuto : minuto)}:${(segundo < 10 ? "0" + segundo : segundo)}`)
