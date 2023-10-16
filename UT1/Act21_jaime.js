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

console.log(invertirCadena("Hola Mundo"))

//Solución de internet
const invertirCadena2 = cadena => {

    return (cadena === '') ? '' : invertirCadena2(cadena.substr(1)) + cadena.charAt(0);

}

console.log(invertirCadena2("Hola Mundo 2"))