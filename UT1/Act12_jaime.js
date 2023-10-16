"use strict"

/**
 * Programa una función para convertir grados Celsius a Fahrenheit
 * y viceversa, pe.miFuncion(0,"C") devolverá 32°F.
*/

const convertirGrados = (grados, caracter) => {
    if (caracter === "C") {
        grados = (grados * 9 / 5) + 32
        caracter = "F"
        return `${grados}º${caracter}`
    } else {
        grados = (grados - 32) * 5 / 9
        caracter = "C"
        return `${grados}º${caracter}`
    }
}
console.log(convertirGrados(100, "F"))