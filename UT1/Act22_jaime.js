
"use strict"

/**
 * Programa una función para contar el número de veces que se repite 
 * una palabra en un textolargo, 
 * pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

let texto = "hola mundo adios mundo adios"
let palabra = "mundo"

const contarPalabra = (texto, palabra) => {

    let contador = 0
    let regExp = new RegExp(palabra, "ig")

    let repeticiones = texto.match(regExp)

    contador = repeticiones.length

    return contador
}

console.log(`Se repite ${contarPalabra(texto, palabra)} ${contarPalabra(texto, palabra) > 1 ? 'veces.' : 'vez.'}`)
