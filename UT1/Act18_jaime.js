"use strict"

/**
 * Programa una función que te devuelva el texto recortado según el número 
 * de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola".
*/

let num = 7, texto = "Hola Mundo"

const recortarTexto = (texto, num) => {
    return texto.substring(0, num)
}

console.log(recortarTexto(texto, num))