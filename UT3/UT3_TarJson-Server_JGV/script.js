"use strict";

/* TAREA 01 */
let cargar = document.createElement("button");
cargar.textContent = "Cargar imágenes";
cargar.addEventListener("click", function (event) {
  fetch("http://localhost:3000/usuarios")
    .then((response) => response.json())
    .then(usuarios => {
      usuarios.forEach(image => {
        let img = document.createElement("img")
        img.src = image.foto
        img.alt = image.usuario
        document.body.appendChild(img)
      });
    })
    .catch((error) => console.log(error));
});
document.body.appendChild(cargar);

/* TAREA 02 */
let guardar = document.createElement("button")
guardar.textContent = "Guardar usuario"
guardar.addEventListener("click", function (event) {
  let idUser = "6"
  let nombre = prompt("Introduce un nombre de usuario:")
  let correo = prompt("Introduce un email:")
  let url = prompt("Introduce una url con tu foto:")

  fetch("http://localhost:3000/usuarios", {
    method: "POST",
    body: JSON.stringify({
      id: idUser,
      usuario: nombre,
      email: correo,
      foto: url
    }),
    headers: {
      "Content-type": "application/json; charset=UTF=8"
    }
  }).then(response => response.json())
    .then(json => console.log(json))
})
document.body.appendChild(guardar)

/* TAREA 03 */
let modImagen = document.createElement("button")
modImagen.textContent = "Modificar imágenes"
modImagen.addEventListener("click", function (event) {
  let firstImage = "https://avatars.githubusercontent.com/u/144746228?v=4"

  fetch("http://localhost:3000/usuarios")
    .then(response => response.json())
    .then(json => {
      json.forEach(user => {
        user.foto = firstImage
      })

      let jsonData = JSON.stringify(json)

      fetch("http://localhost:3000/usuarios", {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: jsonData
      })
        .then(response => response.json())
        .then(updated => console.log(`El JSON ha sido actualizado: ${updated}`))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})
document.body.appendChild(modImagen)

/* TAREA 04 */
let modNombre = document.createElement("button")
modNombre.textContent = "Modificar nombre"
modNombre.addEventListener("click", function (event) {
  fetch("http://localhost:3000/usuarios/4", {
    method: "PATCH",
    body: JSON.stringify({
      usuario: prompt("Introduce un nuevo nombre")
    })
  })
    .then(response => response.json())
    .then(json => { console.log(`Se ha modificado el nombre.`) })
})
document.body.appendChild(modNombre)

/* TAREA 05 */
let eliminarHeroe = document.createElement("button")
eliminarHeroe.textContent = "Eliminar heroes"
eliminarHeroe.addEventListener("click", function (event) {

  fetch("http://localhost:3000/heroes/dc-superman", {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(json => { `El heroe ha sido eliminado. ${json}` })
    .catch(error => console.log(error))

})
document.body.appendChild(eliminarHeroe)