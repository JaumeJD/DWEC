"use strict"

/**
 * Comprueba que una cadena empieza con las letras “m” o “d” y 
 * además termina con las letras “a” o “o”. Realiza el ejercicio 
 * con funciones de cadena y con expresiones regulares.
*/

let patron = /^[md].*[ao]$/i

const comprobarCadena = (cadena, patron) => {
    return patron.test(cadena) ? `${cadena} CUMPLE con el patrón.` : `${cadena} NO CUMPLE con el patrón.`
}

console.log(comprobarCadena("malo", patron))
console.log(comprobarCadena("mala", patron))
console.log(comprobarCadena("dado", patron))
console.log(comprobarCadena("dada", patron))
console.log(comprobarCadena("tarro", patron))
console.log(comprobarCadena("diamante", patron))
console.log(comprobarCadena("tigre", patron))
