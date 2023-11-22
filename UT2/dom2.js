"use strict"

let contenido = document.querySelector('body')
let table = document.createElement('table')
table.setAttribute('border', '1')
table.setAttribute('cellspacing', '0')
table.setAttribute('cellpading', '0')
let cont = 0

for (let i = 0; i < 10; i++) {

    let row = document.createElement('tr')

    for (let i = 0; i < 10; i++) {

        let col = document.createElement('td')
        cont++
        col.textContent = cont
        row.appendChild(col)
    }
    table.appendChild(row)
}
contenido.appendChild(table)

let button = document.querySelector('#idButton')
button.addEventListener('click', function (e) {
    let table = document.querySelector('table')
    let filas = table.chi
    console.log(table)
})