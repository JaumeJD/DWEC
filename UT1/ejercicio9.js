"use strict"

/**
 * Realizar una pequeña calculadora, donde el programa solicite dos números y una operación aritmética simple (+,-,*,/). 
 * El programa debe validar que los datos introducidos por el usuario son correctos. 
 * Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado.
 */

let num1, num2, numeros, arrayNumeros, caracter, sumar = "+", restar = "-", multiplicar = "*", dividir = "/"
const exp = /[\+\-*\/]/

do {

    numeros = prompt("Introduce dos números:", "X Y")
    arrayNumeros = numeros.split(" ")
    num1 = parseInt(arrayNumeros[0])
    num2 = parseInt(arrayNumeros[1])

} while (isNaN(n1) || isNaN(n2));

do {

    caracter = prompt("Introduce un caracter:\nSumar +\nRestar -\nMultiplicar *\nDividir /", "+-*/")

    switch (caracter) {

        case "+":
            console.log(`${num1} más ${num2} es igual a ${num1 + num2}`)
            break;

        case "-":
            console.log(`${num1} menos ${num2} es igual a ${num1 - num2}`)
            break;

        case "*":
            console.log(`${num1} por ${num2} es igual a ${num1 * num2}`)
            break;

        case "/":
            console.log(`${num1} entre ${num2} es igual a ${num1 / num2}`)
            break;

        default:
            console.log("No has introducido un caracter válido.")
            break;
    }

} while (!exp.test(caracter));