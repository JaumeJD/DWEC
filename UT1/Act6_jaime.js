"use strict"

/**
 * Mostrar todos los números impares que hay entre dos números introducidos por el usuario, no incluidos.
 */

let num1, num2;

num1 = parseInt(prompt("Introduce el primer número:"))
num2 = parseInt(prompt("Introduce el segundo número:"))

console.log("Los números impares son:")

if (num1 < num2) {

    for (let index = num1 + 1; index < num2; index++) {
        if (i % 2 !== 0) {
            console.log(index)
        }
    }

} else {

    for (let index = num1 - 1; index > num2; index--) {
        if (index % 2 !== 0) {
            console.log(index)
        }
    }
} 
