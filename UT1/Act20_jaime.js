"use strict"

/**
 * Programa una función que repita un texto X veces, 
 * pe. miFuncion('Hola Mundo', 3) devolverá 
 * Hola Mundo Hola Mundo Hola Mundo.
 */

let cadena = "Hola Mundo "
let num = 3

const repetirTexto = (cadena, num) => {
    return cadena.repeat(num)
}

console.log(repetirTexto(cadena, num))