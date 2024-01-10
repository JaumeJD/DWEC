"use strict";

// A diferencia de localStorage, sessionStorage guarda la información
// mientras no se cierre la sesión (cerrar ventana o pestaña).

/*
sessionStorage.setItem("nombre", "Jacinta");
console.log(sessionStorage.getItem("nombre"));
sessionStorage.removeItem("nombre");
sessionStorage.clear();
*/

sessionStorage.setItem("username", "Jaime");

let nombre = prompt("Introduce el usuario: ");

if (nombre == sessionStorage.getItem("username")) {
  let mensaje = document.createElement("p");
  mensaje.textContent = `¡Bienvenido de nuevo, ${sessionStorage.getItem(
    "username"
  )}!`;
  document.body.appendChild(mensaje);
}

let inputUsuario = document.createElement("input");
inputUsuario.placeholder = "Introduce un usuario...";
document.body.appendChild(inputUsuario);

let botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar usuario";
document.body.appendChild(botonEliminar);
botonEliminar.addEventListener("click", function (event) {
  let user = document.querySelector("input");

  if (user.value == sessionStorage.getItem("username")) {
    sessionStorage.removeItem("username");
  }
});
