"use strict"

/**
 * Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
 * hasta introducir un número negativo y entonces mostrar el resultado.
 */

let respuesta, suma = 0, producto = 1, media = 0, cont = 0;

do {

    cont += 1
    respuesta = parseInt(prompt("Introduce un número:"))
    suma += respuesta
    producto *= respuesta
    media = suma / cont

} while (respuesta >= 0);

console.log(`El sumatorio de los números introducidos es: ${suma}.\n` +
    `El producto de los números introducidos es: ${producto}.\n` +
    `La media de los número introducidos es ${media}`)
