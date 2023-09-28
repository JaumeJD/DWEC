"use strict"

/**
 * Mostrar todos los números impares que hay entre dos números introducidos por el usuario, no incluidos.
 */

let n1, n2;

n1 = parseInt(prompt("Introduce el primer número:"))
n2 = parseInt(prompt("Introduce el segundo número:"))

console.log("Los números impares son:")

if (n1 < n2) {

    for (let i = n1 + 1; i < n2; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }

} else {

    for (let i = n1 - 1; i > n2; i--) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
} 
