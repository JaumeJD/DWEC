"use strict"

/**
 * Programa una función para convertir números de base binaria a decimal y viceversa, 
 * pe.miFuncion(100,2) devolverá 4 base 10
*/

let numero = 27, base = 10

let convertirNumeros = (numero, base) => {

    if (base == 2) {
        let acum = 0;
        numero = numero.toString().split("").reverse().join("")
        parseInt(numero)
        for (let i = 0; i < numero.length; i++) {
            acum += numero[i] * Math.pow(base, i)
        }
        return `${acum} base 10`
    }

    if (base == 10) {
        let acum = ""
        do {
            acum += Math.floor(numero % 2)
            numero = Math.floor(numero / 2)
        } while (numero / 2 != 0);
        return `${acum} base 2`
    }

    return 'No es en base binaria ni decimal.'
}

console.log(convertirNumeros(numero, base))