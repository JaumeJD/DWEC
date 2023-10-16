"use strict"

/**
 * Programa una función que valide si una palabra o frase dada, 
 * es un palíndromo (que se lee igual en un sentido que en otro), 
 * pe. mifuncion("Salas") devolverá true.
*/

let palabra = "Salas"

const esPalindromo = (palabra) => {
    palabra = palabra.toLocaleLowerCase()
    let palabra2 = ""

    for (let index = palabra.length - 1; index >= 0; index--) {
        palabra2 += palabra[index]
    }
    
    if (palabra === palabra2) {
        return true
    }
    return false
}

console.log(`${palabra} ${esPalindromo(palabra) ? 'ES' : 'NO ES'} palindromo.`)