"use strict"

/**
 * Programa una función que calcule el factorial de un número 
 * (El factorial de un entero positivo n, se define como 
 * el producto de todos los números enteros positivos desde 1 hasta n), 
 * pe. miFuncion(5) devolverá 120
 */

let producto = 1, productoR = 1
let num = Math.floor(Math.random() * (10 - 1) + 1)
let numR = Math.floor(Math.random() * (10 - 1) + 1)

const calcularFactorial = (num) => {
    for (let i = 1; i <= num; i++) {
        producto *= i
    }
    return producto
}

const calcularFactorialRecursiva = (numR) => {
    if (numR == 0) {
        return productoR
    }
    productoR *= numR
    return calcularFactorialRecursiva(numR - 1)
}

console.log(`El factorial de ${num} es ${calcularFactorial(num)}.`)
console.log(`El factorial con recursiva de ${numR} es ${calcularFactorialRecursiva(numR)}`)