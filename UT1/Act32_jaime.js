"use strict"

/**
 * Programa una función que dada una cadena de texto cuente el número de vocales y 
 * consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5
*/

let contarVocalConsonante = texto => {

    let vocalExp = new RegExp(/[aeiou]/i)
    let consonanteExp = new RegExp(/[bcdfghjklmnñpqrstvwxyz]/i)
    let vocales = texto.replace(" ", "").split("").filter(vocal => vocalExp.test(vocal))
    let consonantes = texto.replace(" ", "").split("").filter(consonante => consonanteExp.test(consonante))

    console.log(vocales)
    console.log(consonantes)

    return `Vocales: ${vocales.length}, Consonantes: ${consonantes.length}`
}

console.log(contarVocalConsonante("Hola Mundo"))