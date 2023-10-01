"use strict"

/**
 * Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
 */

let hora, minuto, segundo;

hora = 23
minuto = 59
segundo = 59

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

console.log(`Un segundo después: ${hora}:${minuto}:${segundo}`)