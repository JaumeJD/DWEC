"use strict"

// let saludar = () => {
//     alert("Evento al pulsar Saludar2")
// }

// let button4 = document.querySelector("#idBoton4")

// let mostrarMensaje = () => {
//     alert("Saludar4")
//     alert("Saludar4.1")
// }

// button4.addEventListener('click', function () {
//     alert("Saludar5")
// })

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("Ya está cargado el HTML solo.")
// })

// window.addEventListener("load", function () {
//     console.log("Ya se ha cargado el HTML y CSS.")
// })

// console.log("\n\tAcceder a un radio button:")
// let radioButton1 = document.getElementsByName('nrButton1')
// radioButton1.forEach(elem => {
//     console.log(elem)
//     console.log(elem.value)
// })

// for (let elem of radioButton1) {
//     if (elem.checked === true) {
//         console.log("La opción marcada es: " + elem.value)
//     }
// }

// for (let elem of radioButton1) {
//     elem.addEventListener("change", function (e) {
//         if (elem.checked === true) {
//             console.log("Ahora la opción marcada es: " + elem.value)
//         }
//     })
// }

let checkBoxes1 = document.getElementsByName("nCheck1")
checkBoxes1.forEach(elem => {
    console.log(elem)
    console.log(elem.value)
})
for (let elem of checkBoxes1) {
    if (elem.checked === true) {
        console.log("La opción del checkbox marcado es: " + elem.value)
    }
}
for (let elem of checkBoxes1) {
    elem.addEventListener("change", function (e) {
        if (elem.checked === true) {
            console.log("Me como un " + elem.value)
        } else {
            console.log("Pues ya no me como un " + elem.value)
        }
    })
}

let langSelect = document.querySelector('#idLenguaje')
langSelect.addEventListener("change", function (e) {
    console.log(`El índice seleccionado es ${langSelect.selectedIndex}`)
    console.log(`El valor del elemento seleccionado es ${langSelect.value}`)
    console.log(`El contenido seleccionado es ${langSelect.options[langSelect.selectedIndex].text}`)
})