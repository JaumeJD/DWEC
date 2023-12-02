"use strict"

let coord = document.createElement('p')
coord.textContent = `Posición actual del mouse.`
document.addEventListener('mousemove', function (e) {
    coord.textContent = `Eje X: ${e.offsetX} | Eje Y: ${e.offsetY}`
    //coord.textContent = `Eje X: ${e.clientX} | Eje Y: ${e.clientY}`
})
document.body.appendChild(coord)