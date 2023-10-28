"use strict"

/**
 * Programa una función que valide que un texto sea un email válido, 
 * p.e. miFuncion (“javier.ferrer@iesmartinezm.es”) devolverá verdadero. 
 * NOTA: caracteres, números, puntos guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.
*/

let email = 'jgarveg163@iesmartinezm.es'

let validarNombre = email => {

    let emailExp = new RegExp(/^[a-z0-9.-_]+@+[a-z0-9]+.+[a-z]{2}$/i)
    console.log(emailExp.test(email))
}

console.log(validarNombre(email))
