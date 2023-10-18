"use strict"
/**
 * Programa una función que reciba un número y evalúe si es capicúa o no 
 * (que se lee igual en un sentido que en otro), 
 * pe. miFuncion(2002) devolverá true
 */

let num = 2002

const esCapicua = (num) => {

    let aux = num.toString().split("").reverse().join("")

    if (aux == num) {
        return true
    }
    return false
}

console.log(esCapicua(num))