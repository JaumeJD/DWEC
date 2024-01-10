"use strict";

let nombre1 = prompt("Introduce un nombre de usuario:");
let nombre2 = prompt("Introduce un nombre de usuario:");
let nombre3 = prompt("Introduce un nombre de usuario:");

let miArray = new Array();
miArray.push(nombre1);
miArray.push(nombre2);
miArray.push(nombre3);

//Al no hacer JSON.parse() te devuelve el array como una cadena de texto.
localStorage.setItem("array", JSON.stringify(miArray));
console.log(localStorage.getItem("array"));

//Tienes que hacer JSON.parse() para que te devuelva el array, y no una cadena de texto plano.
let v = JSON.parse(localStorage.getItem("array"));
console.log(v);
