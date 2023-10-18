"use strict"

/**
 * Programa una función que elimine cierto patrón de caracteres de un texto
 *  dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
 * devolverá "1, 2, 3, 4 y 5.
*/

let cadena = "xyz1, xyz2, xyz3, xyz4, xyz5"
let patron = /xyz/ig

const eliminarPatron = (cadena, patron) => {
    if (patron.test(cadena)) {
        console.log(`Funciona`)
    }
}

console.log(eliminarPatron(cadena, patron))
