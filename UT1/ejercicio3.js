"use strict"

/**
 * Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
 */

let hora, minuto, segundo;
let horaF, minutoF, segundoF;

hora = 23
minuto = 59
segundo = 58

console.log(`Hora inicial: ${hora}:${minuto}:${segundo}`)

horaF = hora
minutoF = minuto
segundoF = segundo + 1

if (segundoF == 60) {

    segundoF = 0
    minutoF += 1

    if (minutoF == 60) {
        minutoF = 0
        horaF += 1

        if (horaF == 24) {
            horaF = 0
        }
    }
}

console.log(`Un segundo después: ${horaF}:${minutoF}:${segundoF}`)