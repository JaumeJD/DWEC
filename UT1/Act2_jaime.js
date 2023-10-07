"use strict"

/**
 * Modifica el programa anterior: si los números no son un número o son menores o iguales a 
 * ceros, que los vuelva a pedir.
 */

let respuesta, numeros, num1, num2;

let compararNumeros = (num1, num2) => {

    if (num1 < num2) {
        return `${num1} es MENOR que ${num2}`
    }

    if (num1 > num2) {
        return `${num1} es MAYOR que ${num2}`
    }

    if (num1 === num2) {
        return `${num1} es IGUAL que ${num2}`
    }
}

do {

    respuesta = prompt("Introduce dos número mayores que 0:", "X Y")
    numeros = respuesta.split(" ")
    num1 = numeros[0]
    num2 = numeros[1]

} while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2));

console.log(compararNumeros(num1, num2))