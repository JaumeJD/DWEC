"use strict"

/**
 * Programa una función que dada una fecha válida determine 
 * cuantos años han pasado hasta el día de hoy, 
 * pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”) 
*/

let fecha = '10/12/2010'

let calcularAnyos = (fecha) => {

    let fechaPasada = new Date(fecha)
    if (isNaN(fechaPasada)) {

        return 'La fecha no es válida. Formato MM/DD/YYYY o YYYY/MM/DD.'
    } else {

        let fechaActual = new Date()
        let diferenciaMilisegundos = fechaActual - fechaPasada
        let milisegundosAlAnyo = 1000 * 60 * 60 * 24 * 365.25
        let diferenciaAnyos = parseInt(Math.floor(diferenciaMilisegundos / milisegundosAlAnyo))

        return `Han pasado ${diferenciaAnyos} año/s.`
    }
}

console.log(calcularAnyos(fecha))