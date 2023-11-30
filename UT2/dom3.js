"use strict"

let form = document.createElement("form")
document.body.appendChild(form)

let llenarForm = () => {
    for (let i = 0; i < 100; i++) {
        let label = document.createElement("label")
        label.textContent = i
        let input = document.createElement("input")
        input.type = "checkbox"
        input.value = Math.floor(Math.random() * 101 + 100)
        input.onchange = cambiarCheck
        form.appendChild(label)
        form.appendChild(input)
    }
}

let cambiarCheck = (e) => {
    console.log(e.target.value)
}

let marcarCheck = document.createElement("button")
marcarCheck.textContent = "Marcar checks"
marcarCheck.addEventListener('click', function (e) {
    form.childNodes.forEach(child => { })
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

        }
    })
})
document.body.appendChild(ampliarCheck)

let restablecerCheck = document.createElement("button")



llenarForm()