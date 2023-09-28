"use strict"

/**
 * Modifica el programa anterior: si los números no son un número o son menores o iguales a 
 * ceros, que los vuelva a pedir.
 */

let respuesta, numeros, n1, n2;

let compararNumeros = (n1, n2) => {

    if (n1 < n2) {
        return `${n1} es MENOR que ${n2}`
    }

    if (n1 > n2) {
        return `${n1} es MAYOR que ${n2}`
    }

    if (n1 === n2) {
        return `${n1} es IGUAL que ${n2}`
    }
}

do {

    respuesta = prompt("Introduce dos número mayores que 0:", "X Y")
    numeros = respuesta.split(" ")
    n1 = numeros[0]
    n2 = numeros[1]

} while (n1 <= 0 || n2 <= 0 || isNaN(n1) || isNaN(n2));

console.log(compararNumeros(n1, n2))