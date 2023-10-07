"use strict"

/**
 * Mostrar todos los números que hay entre dos números introducidos por el usuario, no incluidos.
 */

let num1, num2;

num1 = parseInt(prompt("Introduce el primer número:"))
num2 = parseInt(prompt("Introduce el segundo número:"))

console.log("Entre esos dos números están:")

if (num1 < num2) {

    for (let index = num1 + 1; index < num2; index++) {
        console.log(index)
    }

} else {

    for (let index = num1 - 1; index > num2; index--) {
        console.log(index)
    }
} 
