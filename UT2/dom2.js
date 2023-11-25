"use strict"

//Fija el body de la pagina.
let contenido = document.querySelector('body')

//Crea el elemento tabla, al cual se le añade un borde sin margenes.
let table = document.createElement('table')
table.setAttribute('border', '1')
table.setAttribute('cellspacing', '0')
table.setAttribute('cellpading', '0')

//Variables que se van a usar.
let cont = 0
let numRows = 10
let numCols = 10

//Un bucle que para el número de filas dado, crea un elemento tr.
for (let i = 0; i < numRows; i++) {

    let row = document.createElement('tr')

    //Bucle anidado en el que por cada numero de columnas, crea un elemento td 
    //le asigna su numero correspondiente y lo añade a su fila .
    for (let i = 0; i < numCols; i++) {

        let col = document.createElement('td')
        cont++
        col.textContent = cont
        row.appendChild(col)
    }
    //Al terminar de crear la fila, la inserta en la tabla previamente creada
    //y continua con la siguiente fila si la hubiere.
    table.appendChild(row)
}

//Al terminar de crear la tabla, se inserta en el body objetivo de nuestro html.
contenido.appendChild(table)


//Boton para marcar los numeros casi primos.
let buttonCasiPrimos = document.querySelector('#casiPrimos')
buttonCasiPrimos.addEventListener('click', function (e) {
    //Se seleccionan todos los elementos td de nuestra tabla.
    let cell = document.querySelectorAll('td')

    //Se crea un bucle donde por cada elemento se comprueba si su contenido es un numero casi primo.
    cell.forEach(elem => {
        let num = parseInt(elem.textContent)
        let cont = 0
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                cont++
            }
        }
        //Si cont > 2, significa que el numero no es primo.
        if (cont == 2) {
            elem.setAttribute('style', 'background-color: yellow;')
        }
    })
})

//Boton para restablecer la tabla.
let buttonRestart = document.querySelector('#restart')
buttonRestart.addEventListener('click', function (e) {
    let cell = document.querySelectorAll('td')
    cell.forEach(elem => {
        //Bucle con todos los elementos td, previamente recogidos, donde se remueve
        //el atributo style que introducimos al comprobar que era casi primo.
        elem.removeAttribute('style')
    })
})
//PD: Realmente para restablecer las celdas basta con copiar el otro botón
//y cambiar el set por remove. Entiendo por restablecer dejar la tabla como recien creada.