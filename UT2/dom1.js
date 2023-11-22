"use strict"

let list = document.querySelector('#idList')
let newNum = document.querySelector('#newNum')
let delNum = document.querySelector('#delNum')

newNum.addEventListener("click", function (e) {
    let num = Math.round(Math.random() * (100 - 1) + 1)
    let listElem = document.createElement('li')
    listElem.setAttribute('style', 'list-style: none;')
    listElem.textContent = num
    list.appendChild(listElem)
})

delNum.addEventListener("click", function (e) {
    let num = list.lastElementChild
    try {
        list.removeChild(num)
    } catch (error) {
        console.log(error)
        console.log('No hay números que eliminar.')
    }
})