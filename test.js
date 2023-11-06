"use strict"

let fecha = new Date();
console.log(fecha) //Devuelve la fecha actual.

let fecha2 = new Date("2023/05/15 17:36:57")
console.log(fecha2) //Devuelve fecha pasada por parámetro string.

let fecha3 = new Date(1979, 5, 30, 14, 30, 15, 0)
console.log(fecha3) //Los meses cuentan desde 0, añade 1 mas al print.

let fecha4 = new Date(1979, 5, 26)
console.log(fecha4)

let fecha5 = new Date("07/28/1995")
console.log(fecha5)

//Metodos get para coger el valor de un objeto fecha.
console.log(fecha3.getDay()) // Devuelve el número del día de la semana.
console.log(fecha3.getDate()) // Devuelve el número del día del mes.
console.log(fecha3.getMonth()) // Devuelve el número del mes + 1.
console.log(fecha3.getFullYear()) // Devuelve el número del año.
console.log(fecha3.getHours()) // Devuelve el número de las horas.
console.log(fecha3.getMinutes()) // Devuelve el número de los minutos.
console.log(fecha3.getSeconds()) // Devuelve el número de los segundos.
console.log(fecha3.getMilliseconds()) // Devuelve el número de los milisegundos.

//Metodos set para darle un valor a un objeto fecha.
fecha3.setMonth(11)
fecha3.setDate(31)
fecha3.setFullYear(2023)
fecha3.setHours(23)
fecha3.setMinutes(30)
fecha3.setSeconds(59)
fecha3.setMilliseconds(599)

console.log(fecha3.toDateString()) // Devuelve: Sun Dec 31 2023 (el mes está adelantado 1)
console.log(fecha3.toLocaleDateString()) // Devuelve: 31/12/2023 (el mes está adelantado 1)
console.log(fecha3.toUTCString()) // Devuelve: Sun, 31 Dec 2023 22:30:59 (el mes está adelantado 1)

//Calcular el día siguiente a una fecha
let fecha6 = new Date(1979, 11, 31)
fecha6.setDate(fecha6.getDate() + 1)
console.log(fecha6.toLocaleDateString())

//Floor, ceil y round
let num = 25.4
console.log("Math.floor(" + num + ") = " + Math.floor(num)) // Trunca hacia abajo.
console.log("Math.ceil(" + num + ") = " + Math.ceil(num)) // Trunca hacia arriba.
console.log("Math.round(" + num + ") = " + Math.round(num)) // A partir de .5 redondea hacia arriba.

//Operaciones matematicas
let a = 8, b = 5
console.log("Math.abs(" + num + ") = " + Math.abs(num)) // Valor absoluto
console.log("Math.min(" + a + ", " + b + ") = " + Math.min(num)) // Valor minimo
console.log("Math.max(" + a + ", " + b + ") = " + Math.max(num)) // Valor maximo
console.log("Math.pow(" + a + ", " + b + ") = " + Math.pow(a, b)) // Base exponente
console.log("Math.random() = " + Math.random()) // Numero aleatorio 0<=num<1
console.log("Math.sqrt(" + num + ") = " + Math.sqrt(num)) // Base exponente

//0<=num<10
console.log(Math.random() * 10)
//0<=num<=10
console.log(Math.round(Math.random()) * 10)
//1<=num<=10
console.log(Math.ceil(Math.random()) * 10)
//20<=num<=60
console.log(Math.round(Math.random() * (60 - 20) + 20))

//Temporizadores
{


    let f = () => {
        console.log("Me llaman.")
    }

    let f2 = () => {
        console.log("Hola")
    }

    let idTemp = setInterval(f, 1000) // Llama a la funcion f cada segundo y asigna su identificador.

    setTimeout(f2, 2000) // Llama a la funcion una vez a los 2 segundos

    clearInterval(idTemp)

    let idBoton;

    let comenzarTemporizador = () => {
        idBoton = setInterval(() => console.log(new Date()), 1000)
    }

    let terminarTemporizador = () => {
        clearInterval(idBoton)
    }

    document.write("<p>Botones del temporizador</p>")
    document.write("<button id='start'>START</button>")
    document.write("<button id=\"stop\">STOP</button>")
    document.getElementById("start").addEventListener("click", comenzarTemporizador)
    document.getElementById("stop").addEventListener("click", terminarTemporizador)

}

{
    //CREACION ARRAY BIDIMENSIONALES
    //Forma 1
    let arrayBi1 = new Array()
    arrayBi1[0] = [1, 2, 3, 4, 5]
    arrayBi1[1] = [2, 3, 4, 5, 6]
    arrayBi1[2] = [3, 4, 5, 6, 7]
    arrayBi1[2][4] = 9 //CAMBIA EL VALOR DE LA FILA 2 COLUMNA 4.

    //Forma 2
    let numFilas = 2, numColumnas = 4
    let arrayBi2 = new Array(numFilas)
    for (let i = 0; i < numFilas; i++) {
        arrayBi2[i] = new Array(numColumnas)
    }

    //Relleno del array con ceros
    for (let i = 0; i < numFilas; i++) {
        for (let i = 0; i < numColumnas; i++) {
            arrayBi2[i][j] = 0
        }
    }

    //Forma 3, array vacio
    let arrayBi3 = Array.from(Array(2), () => new Array(4))
}