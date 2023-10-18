"use strict"

/**
 * Programa una función que invierta las palabras de una cadena de texto, 
 * pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

//Solución personal
const invertirCadena = cadena => {
    let cadenaInvertida = ""

    for (let index = cadena.length - 1; index >= 0; index--) {
        cadenaInvertida += cadena[index]
    }
    return cadenaInvertida
}

const invertirCadena2 = cadena => {
    let array = cadena.split("")
    array.reverse()
    let cadenaInvertida = array.join("")
    return cadenaInvertida
}

console.log(invertirCadena("Hola Mundo"))
console.log(invertirCadena2("Hola Mundo"))
