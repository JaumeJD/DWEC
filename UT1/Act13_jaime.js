"use strict"

/**
 * Programa una función que calcule el factorial de un número 
 * (El factorial de un entero positivo n, se define como 
 * el producto de todos los números enteros positivos desde 1 hasta n), 
 * pe. miFuncion(5) devolverá 120
 */

let producto = 1, num = Math.floor(Math.random() * 10)

const calcularFactorial = (num) => {
    for (let i = 1; i <= num; i++) {
        producto *= i
    }
    return producto
}

console.log(`El factorial de ${num} es ${calculaFactorial(num)}.`)