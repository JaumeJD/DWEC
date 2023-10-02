"use strict"

/**
 * Mostrar todos los números divisores de un número introducido por el usuario.
 */

let num1;

num1 = parseInt(prompt("Introduce un número: ", "X"))

for (let index = 1; index <= num1; index++) {

    if (num1 % index == 0) {
        console.log(index)
    }
}
