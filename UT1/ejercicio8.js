"use strict"

/**
 * Mostrar la tabla de multiplicar de un número introducido por pantalla.
 */

let num1;

num1 = parseInt(prompt("Introduce un número:", "X"))

for (let index = 1; index <= 10; index++) {
    console.log(`${num1} * ${index} = ${num1 * index}`)
}