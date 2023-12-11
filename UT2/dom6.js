"use strict";

//Creacion del boton 'Comenzar Saludos', se añade estilo,
//el contenido de la etiqueta y la funcion que lance el setInterval.
let iniciar = document.createElement("button");
let saludo;
iniciar.setAttribute(
  "style",
  "padding: 10px; border-radius: 10px; background-color: aquamarine; font-weight: bold; margin-right: 10px;"
);
iniciar.textContent = "Comenzar Saludos";
iniciar.addEventListener("click", function (event) {
  if (!saludo) {
    //setInterval() devuelve un id del intervalo.
    saludo = setInterval(function () {
      alert("HOLA CARACOLA");
    }, 5000);
  }
});
//Se añade el elemento boton "iniciar" al body del html.
document.body.appendChild(iniciar);

//Creacion del boton 'Parar Saludos', se añade estilo,
//el contenido de la etiqueta y la funcion que pare la secuencia iniciada.
let parar = document.createElement("button");
parar.setAttribute(
  "style",
  "padding: 10px; border-radius: 10px; color: white; background-color: brown; font-weight: bold;"
);
parar.textContent = "Parar Saludos";
parar.addEventListener("click", function (event) {
  //Se pueden guardar los id de varios intervalos en una lista
  //y mediante un foreach ir uno a uno eliminandolos.
  clearInterval(saludo);
  saludo = null;
});
//Se añade el elemento boton "parar" al body del html.
document.body.appendChild(parar);
