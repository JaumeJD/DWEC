"use strict"

/**
 * Programa una función que dada una String te devuelva 
 * un Array de textos separados por cierto carácter, 
 * pe. miFuncion('hola que tal', ' ') 
 * devolverá ['hola', 'que', 'tal']
 */

let cadena = "Hola que tal"

const separarCadena = (cadena) => {
    return cadena.split(" ")
}

console.log(separarCadena(cadena))