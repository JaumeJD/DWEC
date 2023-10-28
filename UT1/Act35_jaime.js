"use strict"

/**
 * Programa una función que dado un array numérico devuelve otro array 
 * con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
*/

let vector = [1, 4, 5]

let elevarArray = vector => vector.map(num => num ** 2)

console.log(elevarArray(vector))