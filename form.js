"use strict";

let form = document.querySelector("#idForm1");

form.addEventListener("submit", function (event) {
  let textBox = document.querySelector("#idText1");
  let email = document.querySelector("#idEmail1");
  if (textBox.value.length != 4 || !validaEmail(email.value)) {
    event.preventDefault(); // Evita lo que hace por defecto, enviar form en este caso.
    if (textBox.value.length != 4) {
      mostrarMensaje("El texto tiene que tener 4 caracteres.");
    }
    if (!validaEmail(email.value)) {
      mostrarMensaje("El email debe tener un formato correcto.");
    }
  }
});

let validaEmail = (text) => {
  let regExp = /^[a-z0-9]+(\.[-_a-z0-9]+)*@/i;
  return regExp.test(text);
};

let mostrarMensaje = (texto) => {
  let alert = document.createElement("p");
  alert.textContent = texto;
  alert.setAttribute("class", "error");
  form.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 3000);
};
