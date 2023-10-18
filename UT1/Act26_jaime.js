"use strict"

/**
 * Comprueba que una cadena empieza con las letras “m” o “d” y 
 * además termina con las letras “a” o “o”. Realiza el ejercicio 
 * con funciones de cadena y con expresiones regulares.
*/

let cadena = "malo"
let patron = /^[md].*[ao]$/ig

const comprobarCadena = (cadena, patron) => {

    if (patron.test(cadena)) {
        return true
    }

    return false
}

console.log(comprobarCadena(cadena))