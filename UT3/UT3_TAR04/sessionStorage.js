"use strict"

let info = document.createElement("p")

let comprobarLocalStorage = () => {
    let visitCount = sessionStorage.getItem("visit")

    if (visitCount == null) {
        visitCount = 1
    } else {
        visitCount = parseInt(visitCount) + 1
    }

    sessionStorage.setItem("visit", visitCount)

    info.textContent = `Nº de visitas: ${visitCount}`
    document.body.appendChild(info)
}

document.addEventListener("DOMContentLoaded", comprobarLocalStorage)

let button = document.createElement("button")
button.textContent = "Eliminar contador"
button.addEventListener("click", function (event) {
    sessionStorage.removeItem("visit")
    alert("Se ha eliminado el contador.")
})
document.body.appendChild(button)