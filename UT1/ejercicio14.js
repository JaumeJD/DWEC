"use strict"

/**
 * Programa una función que devuelva el monto final 
 * después de aplicar un descuento a una cantidad dada, 
 * pe. miFuncion(1000, 20) devolverá 800
 */

let cantidad = Math.floor(Math.random() * 1000)
let descuento = Math.floor(Math.random() * 100)

const aplicaDescuento = (cantidad, descuento) => {
    return cantidad - (cantidad * (descuento / 100))
}

console.log(`${cantidad} con un descuento del ${descuento}%`
    + ` serían ${aplicaDescuento(cantidad, descuento).toFixed(2)}`)