"use strict"

let lista = document.createElement("ol")
document.body.appendChild(lista)

let llenarLista = () => {
    for (let i = 0; i < 100; i++) {
        let li = document.createElement("li")
        let check = document.createElement("input")
        li.appendChild(check)
        check.type = "checkbox"
        check.value = Math.floor(Math.random() * 101 + 100)
        check.onchange = cambiarCheck
        lista.appendChild(li)
    }
}

let cambiarCheck = (e) => {
    console.log(e.target.value)
}

let marcarCheck = document.createElement("button")
marcarCheck.textContent = "Marcar checks"
marcarCheck.addEventListener('click', function (e) {
    lista.childNodes.forEach(li => {
        li.childNodes.forEach(input => {
            input.checked = true
        })
    })
})
document.body.appendChild(marcarCheck)

let desmarcarCheck = document.createElement("button")
desmarcarCheck.textContent = "Desmarcar checks"
desmarcarCheck.addEventListener('click', function (e) {
    lista.childNodes.forEach(li => {
        li.childNodes.forEach(input => {
            input.checked = false
        })
    })
})
document.body.appendChild(desmarcarCheck)

let ampliarCheck = document.createElement("button")
ampliarCheck.textContent = "Ampliar checks"
ampliarCheck.addEventListener('click', function (e) {
    lista.childNodes.forEach(li => {
        if (li.textContent % 2 == 0) {
            li
        }
    })
})
document.body.appendChild(ampliarCheck)

let restablecerCheck = document.createElement("button")



llenarLista()