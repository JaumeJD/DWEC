"use strict"

/**
 * Programa una función para contar el número de veces que se repite 
 * una palabra en un textolargo, 
 * pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

let cadena = "hola mundo adios mundo"
let palabra = "mundo"

const contarPalabra = (cadena, palabra) => {

    let arrayCadena = cadena.split(" ")
    console.log(arrayCadena)

}

console.log(contarPalabra(cadena, palabra))
