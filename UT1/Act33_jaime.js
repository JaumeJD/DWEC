"use strict"

/**
 * Programa una función que valide que un texto sea un nombre válido, 
 * p.e. miFuncion (“Javier Ferrer”) devolverá verdadero. 
 * NOTA: No puede haber números ni caracteres especiales como ¡ o ¿
*/

let nombre = 'Javier Ferrer'

let validarNombre = nombre => {

    let nombreExp = new RegExp(/^[a-záéíóúñ ]+$/i)
    console.log(nombreExp.test(nombre))
}

console.log(validarNombre(nombre))