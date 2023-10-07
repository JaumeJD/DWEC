"use strict"

/**
 * Crea una función para dibujar un patrón de diente de sierra inverso en 
 * un cuadro de texto. Con un carácter y un número que indique el mayor número
 * de caracteres en la base (inversa) del patrón. pe1. Datos de entrada: 'A' y 5
AAAAA
AAAA
AAA
AA
A
*/

let num = 5
let caracter = "O"

let dibujarPatron = (caracter, num) => {
    let patron = caracter.repeat(num)
    for (let i = 0; i < 5; i++) {
        console.log(patron)
        patron = patron.substring(1)
    }
}

dibujarPatron(caracter, num)