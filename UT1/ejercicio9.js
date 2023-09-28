"use strict"

/**
 * Realizar una pequeña calculadora, donde el programa solicite dos números y una operación aritmética simple (+,-,*,/). 
 * El programa debe validar que los datos introducidos por el usuario son correctos. 
 * Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.
 */

let n1, n2, numeros, arrayNumeros, caracter, sumar = "+", restar = "-", multiplicar = "*", dividir = "/";
const exp = /[\+\-\*\/]/i
numeros = prompt("Introduce dos números:", "X Y")
arrayNumeros = numeros.split(" ")
n1 = parseInt(arrayNumeros[0])
n2 = parseInt(arrayNumeros[1])


do {

    caracter = prompt("Introduce un caracter:\nSumar +\nRestar -\nMultiplicar *\nDividir /", "+-*/")

    switch (caracter) {

        case "+":
            console.log(`${n1} más ${n2} es igual a ${n1 + n2}`)
            break;

        case "-":
            console.log(`${n1} menos ${n2} es igual a ${n1 - n2}`)
            break;

        case "*":
            console.log(`${n1} por ${n2} es igual a ${n1 * n2}`)
            break;

        case "/":
            console.log(`${n1} entre ${n2} es igual a ${n1 / n2}`)
            break;

        default:
            console.log("No has introducido un caracter válido.")
            break;
    }

} while (!exp.test(caracter));