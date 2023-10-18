"use strict"

/**
 * Programa una función que valide si una palabra o frase dada, 
 * es un palíndromo (que se lee igual en un sentido que en otro), 
 * pe. mifuncion("Salas") devolverá true.
*/

let palabra = "ojo rojo"

const esPalindromo = (palabra) => {
    palabra = palabra.toLocaleLowerCase().replace(/\s+/g, "")

    let palabra2 = palabra.split("").reverse().join("")

    if (palabra === palabra2) {
        return true
    }
    return false
}

console.log(`${palabra} ${esPalindromo(palabra) ? 'ES' : 'NO ES'} palindromo.`)