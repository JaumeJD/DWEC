"use strict"

//Creacion del boton 'Comenzar Saludos', se añade estilo, 
//el contenido de la etiqueta y la funcion que lance el setInterval.
let iniciar = document.createElement('button')
let saludo
iniciar.setAttribute('style', 'padding: 10px; border-radius: 10px; background-color: aquamarine; font-weight: bold; margin-right: 10px;')
iniciar.textContent = 'Comenzar Saludos'
iniciar.addEventListener('click', function (event) {
    if (!saludo) {
        saludo = setInterval(function () {
            alert("HOLA CARACOLA")
        }, 5000)
    }
})
//Se añade el elemento boton "iniciar" al body del html.
document.body.appendChild(iniciar)

//Creacion del boton 'Parar Saludos', se añade estilo,
//el contenido de la etiqueta y la funcion que pare la secuencia iniciada.
let parar = document.createElement('button')
parar.setAttribute('style', 'padding: 10px; border-radius: 10px; color: white; background-color: brown; font-weight: bold;')
parar.textContent = 'Parar Saludos'
parar.addEventListener('click', function (event) {
    clearInterval(saludo)
    saludo = null
})
//Se añade el elemento boton "parar" al body del html.
document.body.appendChild(parar)