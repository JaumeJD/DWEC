"use strict"

/**
 * Programa una función que dado un array devuelva el número más alto y el más bajo 
 * de dicho array p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]
*/

let vector = [1, 5, 34, 99, -2, -60]

let comprobarNumero = vector => {
    let maxMin = []
    maxMin.push(Math.max(...vector))
    maxMin.push(Math.min(...vector))
    return maxMin
}

console.log(comprobarNumero(vector))