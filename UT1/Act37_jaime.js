"use strict"

/**
 * Programa una función que dado un array de números devuelva un objeto con 2 arreglos
 * en el primero almacena los números pares y en el segundo los impares
 * pe.miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
*/

let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

let parImpar = vector => {

    let paresImpares = {
        pares: vector.filter(num => num % 2 == 0),
        impares: vector.filter(num => num % 2 != 0)
    }

    return paresImpares
}

//El objeto muestra primero el impar y luego el par.
console.log(parImpar(vector))
