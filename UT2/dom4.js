"use strict"

let p1 = document.createElement('p')
p1.textContent = 'Párrafo nº1'
p1.setAttribute('style', 'background-color: grey; border-radius: 10px; padding: 10px; width: 50%;')
p1.addEventListener('mouseout', function (e) {
    p1.hidden = true
})
p1.addEventListener('dblclick', function (e) {
    p1.remove()
})
document.body.appendChild(p1)
let p2 = document.createElement('p')
p2.textContent = 'Párrafo nº2'
p2.setAttribute('style', 'background-color: orange; border-radius: 10px; padding: 10px; width: 50%;')
p2.addEventListener('mouseout', function (e) {
    p2.hidden = true
})
p2.addEventListener('dblclick', function (e) {
    p2.remove()
})
document.body.appendChild(p2)
let p3 = document.createElement('p')
p3.textContent = 'Párrafo nº3'
p3.setAttribute('style', 'background-color: blue; border-radius: 10px; padding: 10px; width: 50%;')
p3.addEventListener('mouseout', function (e) {
    p3.hidden = true
})
p3.addEventListener('dblclick', function (e) {
    p3.remove()
})
document.body.appendChild(p3)

let button = document.createElement('button')
button.textContent = 'Reaparecer'
button.addEventListener('click', function (e) {
    p1.hidden = false
    p2.hidden = false
    p3.hidden = false
})
document.body.appendChild(button)