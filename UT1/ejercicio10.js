"use strict"

/**
 * Programa una función que determine si un número es primo (aquel que solo es divisible 
 * por sí mismo y 1) o no, pe. miFuncion(7) devolverá true
 */

let num1;
num1 = Math.floor(Math.random() * (100 - 3 + 1) + 3)

let comprobarPrimo = (num1) => {
    for (let index = 2; index < num1; index++) {
        if (num1 % index == 0) {
            return false
        }
    }
    return true
}

console.log(`${num1} => ${comprobarPrimo(num1)}`)