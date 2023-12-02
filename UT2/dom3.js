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
    if (e.target.checked == true) {
        console.log(`Check${e.target.value} marcado.`)
    } else {
        console.log(`Check${e.target.value} desmarcado.`)
    }
}

let marcarCheck = document.createElement("button")
marcarCheck.textContent = "Marcar checks"
marcarCheck.addEventListener('click', function (e) {
    let inputs = form.querySelectorAll("input")
    inputs.forEach(elem => {
        elem.checked = true
    })
})

document.body.appendChild(marcarCheck)

let desmarcarCheck = document.createElement("button")
desmarcarCheck.textContent = "Desmarcar checks"
desmarcarCheck.addEventListener('click', function (e) {
    let inputs = form.querySelectorAll("input")
    inputs.forEach(elem => {
        elem.checked = false
    })
})
document.body.appendChild(desmarcarCheck)

let ampliarCheck = document.createElement("button")
ampliarCheck.textContent = "Ampliar checks"
ampliarCheck.addEventListener('click', function (e) {
    let inputs = form.querySelectorAll("input")
    inputs.forEach(elem => {
        if (elem.value % 2 == 0) {
            elem.setAttribute('style', 'width: 30px; height: 30px')
        }
    })
})
document.body.appendChild(ampliarCheck)

let restablecerCheck = document.createElement("button")
restablecerCheck.textContent = "Restablecer checks"
restablecerCheck.addEventListener('click', function (e) {
    let inputs = form.querySelectorAll("input")
    inputs.forEach(elem => {
        if (elem.value % 2 == 0) {
            elem.removeAttribute('style')
        }
    })
})
document.body.appendChild(restablecerCheck)


llenarForm()