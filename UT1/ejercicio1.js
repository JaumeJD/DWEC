"use strict"

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