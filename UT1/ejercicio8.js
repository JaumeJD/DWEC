"use strict"

/**
 * Mostrar la tabla de multiplicar de un número introducido por pantalla.
 */

let n1;

n1 = parseInt(prompt("Introduce un número:", "X"))

for (let index = 1; index <= 10; index++) {
    console.log(`${n1} * ${index} = ${n1 * index}`)
}