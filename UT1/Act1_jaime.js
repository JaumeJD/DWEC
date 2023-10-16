"use strict"

//Dados dos números indicar cuál es mayor, menor o si son iguales.

let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)

const compararNumeros = (num1, num2) => {
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

console.log(compararNumeros(num1, num2))