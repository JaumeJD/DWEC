"use strict"

/**
 * Programa una función que determine si un número es par o impar, 
 * pe. miFuncion(29) devolverá Impar.
 */

let num = Math.floor(Math.random() * 10)

const parImpar = (num) => (num % 2 == 0) ? "par" : "impar"

console.log(`El número ${num} es ${parImpar(num)}.`)