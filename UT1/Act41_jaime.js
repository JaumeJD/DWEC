"use strict"

/**
 * Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

let max = 600, min = 501

let numAleatorio = (max, min) => {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(numAleatorio(max, min))