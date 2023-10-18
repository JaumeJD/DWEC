"use strict"

/**
 * Programa una función que invierta las palabras de una cadena de texto, 
 * pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const invertirCadena = cadena => {
    return cadena.split("").reverse().join("")
}

console.log(invertirCadena("Hola Mundo"))

