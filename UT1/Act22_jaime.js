"use strict"

/**
 * Programa una función para contar el número de veces que se repite 
 * una palabra en un textolargo, 
 * pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

let cadena = "hola mundo adios mundo adios"
let palabra = "adios"

const contarPalabra = (cadena, palabra) => {

    let contador = 0
    let arrayCadena = cadena.split(" ")

    /*RECORRE CON FOREACH

        arrayCadena.forEach(element => {
            if (palabra === element) {
                contador++
            }
        });
    */

    //RECORRE CON MAP
    arrayCadena.map(item => {
        if (palabra === item) {
            contador++
        }
    })

    return contador
}

console.log(`Se repite ${contarPalabra(cadena, palabra)} ${contarPalabra(cadena, palabra) > 1 ? 'veces.' : 'vez.'}`)
