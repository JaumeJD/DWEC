"use strict"

/**
 * Programa una función para saber la edad de una persona, 
 * sabiendo la fecha de nacimiento.
*/

let fechaNacimiento = "1997-10-29"
let calcularEdad = fechaNacimiento => {
    let fechaActual = new Date()
    let fechaNacimientoDate = new Date(fechaNacimiento)

    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear()

    if (fechaNacimientoDate.getMonth() > fechaActual.getMonth() ||
        (fechaNacimientoDate.getMonth() == fechaActual.getMonth() &&
            fechaNacimientoDate.getDate() > fechaActual.getDate())) {
        edad--
    }

    return edad
}

console.log(`Tiene ${calcularEdad(fechaNacimiento)} años.`)