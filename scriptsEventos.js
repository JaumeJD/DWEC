"use strict"

let saludar = () => {
    alert("Evento al pulsar Saludar2")
}

let button4 = document.querySelector("#idBoton4")

let mostrarMensaje = () => {
    alert("Saludar4")
    alert("Saludar4.1")
}

button4.addEventListener('click', function () {
    alert("Saludar5")
})

document.addEventListener("DOMContentLoaded", function () {
    console.log("Ya está cargado el HTML solo.")
})

window.addEventListener("load", function () {
    console.log("Ya se ha cargado el HTML y CSS.")
})



