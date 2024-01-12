"use strict";

// A diferencia de localStorage, sessionStorage guarda la información
// mientras no se cierre la sesión (cerrar ventana o pestaña).

/*
sessionStorage.setItem("nombre", "Jacinta");
console.log(sessionStorage.getItem("nombre"));
sessionStorage.removeItem("nombre");
sessionStorage.clear();
*/

let boton = document.createElement("button")
boton.textContent = "Eliminar usuario"
boton.addEventListener("click", function (event) {
  if (sessionStorage.getItem("username")) {
    console.log(`Usuario '${sessionStorage.getItem("username")}' eliminado con exito.`)
    sessionStorage.removeItem("username")
  } else {
    console.log("El usuario no existe.")
  }
})
document.body.appendChild(boton)

if (!sessionStorage.getItem("username")) {
  console.log("El usuario no está identificado.")
  let inputUser = prompt("Introduce tu nombre de usuario:")

  if (inputUser == "" || inputUser == null) {
    console.log("Debes introducir un usuario para guardarlo.")
  } else {
    sessionStorage.setItem("username", inputUser)
    console.log(`Usuario '${inputUser}' guardado con éxito.`)
  }

} else {
  console.log(`¡Bienvenido de nuevo, ${sessionStorage.getItem("username")}!`)
}