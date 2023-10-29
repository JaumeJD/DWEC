"use strict"

/**
 * Programa una función para devolver la edad de una persona 
 * dada su fecha de nacimiento en este formato dd/mm/aaaa.
*/

let fecha = '29/10/1997'

let calcularEdad = (fecha) => {

    fecha = new Date(fecha.split("/").reverse().join("/"))
    let fechaActual = new Date()

    let tiempoMilisegundos = fechaActual - fecha
    let milisegundosAnyo = 1000 * 60 * 60 * 24 * 365.25
    let edad = Math.floor(tiempoMilisegundos / milisegundosAnyo)

    return edad
}

console.log(calcularEdad(fecha))