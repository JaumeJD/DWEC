"use strict"

/**
 * Mostrar todos los números divisores de un número introducido por el usuario.
 */

let n1;

n1 = parseInt(prompt("Introduce un número: ", "X"))

for (let index = 1; index <= n1; index++) {

    if (n1 % index == 0) {
        console.log(index)
    }
}
