"use strict"

let miBoton4 = document.querySelector("#idBoton4")
// miBoton4.addEventListener("click", function (evento) {
//     console.log(evento)
// })

function mostrarMensaje(evento) {
    console.log(`El tipo de evento es ${evento.type}`)
    if (evento.type == "keyup") {
        console.log("Codigo de la tecla pulsada: " + evento.code)
        console.log("Tecla pulsada: " + evento.key)
    } else if (evento.type == "click") {
        console.log("Se ha pulsado el boton en coordenadas: " + evento.clientX + " - " + evento.clientY)
        console.log("Se ha pulsado el boton " + evento.button)
        console.log("Se ha pulsado: " + evento.detail)
        console.log("¿Estaba pulsada la tecla CTRL?" + evento.ctrlKey)
        console.log("¿Estaba pulsada la tecla ALT?" + evento.altKey)
        console.log("¿Estaba pulsada la tecla SHIFT?" + evento.shiftKey)
    } else if (evento.type == "dblclick") {
        console.log("Doble click")
    }
}

function mostrarMensaje2(evento) {
    if (evento.type == "dblclick") {
        console.log("Mensaje 2.")
    }
}

miBoton4.addEventListener("keyup", mostrarMensaje)
miBoton4.addEventListener("click", mostrarMensaje)
miBoton4.addEventListener("dblclick", mostrarMensaje)
/**
 * 3º parametro:
 * capture --> Si se captura al principio.
 * once --> Solo se captura una vez.
 */
// miBoton4.addEventListener("dblclick", mostrarMensaje2, { once: true })
miBoton4.addEventListener("dblclick", mostrarMensaje2, { capture: true })
document.addEventListener("drag", function (e) {
    console.log(`X= ${e.clientX} - Y=${e.clientY}`)
})