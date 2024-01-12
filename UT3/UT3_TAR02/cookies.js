"use strict"

let cont = 0

if (cont == 0) {
    cont++
    document.cookie = `username=John Smith; expires= Thu, 18 Jan 2024 12:00:00 UTC; path=/; Nº de visitas: ${cont}`
    console.log(document.cookie = `username=John Smith; expires= Thu, 18 Jan 2024 12:00:00 UTC; path=/; Nº de visitas: ${cont}`)
}

cont++
console.log(document.cookie = `username=John Smith; expires= Thu, 18 Jan 2024 12:00:00 UTC; path=/; Nº de visitas: ${cont}`)

let boton = document.createElement("button")
boton.textContent = "Eliminar cookie"
boton.addEventListener("click", function (event) {
    document.cookie = `username=John Smith; expires= Thu, 18 Jan 2014 12:00:00 UTC; path=/; Nº de visitas: ${cont}`
    console.log(document.cookie)
})
document.body.appendChild(boton)
