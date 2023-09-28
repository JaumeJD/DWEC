"use strict"

/**
 * Programa una función que determine si un número es primo (aquel que solo es divisible 
 * por sí mismo y 1) o no, pe. miFuncion(7) devolverá true
 */

let n1;
n1 = Math.floor(Math.random() * (100 - 3 + 1) + 3)

let comprobarPrimo = (n1) => {
    for (let i = 2; i < n1; i++) {
        if (n1 % i == 0) {
            return false
        }
    }
    return true
}

console.log(`${n1} => ${comprobarPrimo(n1)}`)