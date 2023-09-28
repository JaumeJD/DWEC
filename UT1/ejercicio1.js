"use strict"

/**
 * Dados dos números indicar cuál es mayor, menor o si son iguales.
 */

let n = Math.floor(Math.random() * 100)
let m = Math.floor(Math.random() * 100)

const compararNumeros = (n, m) => {
    if (n < m) {
        return `${n} es MENOR que ${m}`
    }

    if (n > m) {
        return `${n} es MAYOR que ${m}`
    }

    if (n === m) {
        return `${n} es IGUAL que ${m}`
    }
}

console.log(compararNumeros(n, m))