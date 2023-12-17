"use strict";

//Titulo del ejercicio.
let title = document.createElement("h3");
title.textContent = "Formulario con DOM";
document.body.appendChild(title);

//Formulario con atributos method, id y action.
let form = document.createElement("form");
form.setAttribute("id", "idForm");
form.setAttribute("name", "form");
form.setAttribute("method", "post");
form.setAttribute("action", "https://formsubmit.co/jgarveg163@iesmartinezm.es");
document.body.appendChild(form);

//Div para almacenar cada label con su input.
let div = document.createElement("div");
form.appendChild(div);

//Label del formulario.
let label = document.createElement("label");
label.textContent = "DNI:";
label.setAttribute("for", "dni");
div.appendChild(label);

//Input del formulario (POSIBLES VALIDACIONES EN EL HTML).
let input = document.createElement("input");
input.setAttribute("id", "dni");
input.setAttribute("name", "dni");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "123456789A");
input.required = true;
input.addEventListener("blur", function (event) {
  if (!dniValido(input)) {
    console.log("El dni NO es válido.");
  } else {
    console.log("El dni es ");
  }
});
div.appendChild(input);

//Funcion para comprobar dni
let dniValido = (input) => {
  let expDni = new RegExp(/^[0-9]{8}[A-Z]$/);
  let modulo = input.value.slice(0, 8) % 23
  let letra = input.value.slice(8)
  let letras = 'TRWAGMYFPDXBNJZSQVHLCKE'
  if (expDni.test(input.value) && letras.charAt(modulo) == letra) {
    inputError('El dni es válido.')
    return true
  }
  inputError('El dni NO es válido.')
  return false
}

//Mensaje de error de la validación
let inputError = (mensaje) => {
  let p = document.createElement('p')
  p.textContent = mensaje
  p.setAttribute('style', 'color: red;')
  input.insertAdjacentElement('afterend', p)
}

//Espacio entre input y button.
let space = document.createElement("br");
form.appendChild(space);

//Boton para enviar el formulario.
let button = document.createElement("input");
button.setAttribute("id", "idButton");
button.setAttribute("type", "submit");
button.setAttribute("value", "Click para enviar");
form.appendChild(button);
