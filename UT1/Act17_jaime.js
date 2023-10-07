"use strict"

/**
 * Programa una función que cuente el número de caracteres de una cadena de texto,
 * pe.miFunción("Hola Mundo") devolverá 10.
 */

let cadena = "1a3s5d7f9h0"

const contarCadena = (cadena) => {
    let cont = 0;
    for (let i = 0; i < cadena.length; i++) {
        cont++
    }
    return cont
}

console.log(`${cadena} tiene ${contarCadena(cadena)} caracteres.`)