"use strict";

let button = document.createElement("button");
button.textContent = "Cargar imágenes";
button.addEventListener("click", function (event) {});
document.body.appendChild(button);

fetch("https://localhost:3000/usuarios")
  .then((response) => console.log(response.id))
  .catch((error) => console.log(error));
