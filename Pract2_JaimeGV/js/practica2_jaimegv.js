"use strict";

//RegExp para comprobar que no hay numeros en el nombre.
let tieneNumero = new RegExp(/[0-9]/);

//Todos los campos del formulario que van a requerir validación.
let nombre = document.querySelector(".nombreApellidos");
let correo = document.querySelector(".correo");
let fecha = document.querySelector(".fecha");
let form = document.querySelector(".formulario");
let sexo = document.querySelector(".divRadio");
let aficion = document.querySelector(".aficiones");
let ciudad = document.querySelector(".divCiudades");
let textArea = document.querySelector(".textarea");

//Recibe por parametros el mensaje y la posicion, y lo inserta.
let insertarError = (mensaje, posicion) => {
  let error = document.createElement("p");
  error.textContent = mensaje;
  error.setAttribute("style", "color: red;");
  posicion.insertAdjacentElement("afterend", error);
  setTimeout(() => {
    error.remove();
  }, 4000);
  return true;
};

//Evento al perder el foco del campo nombre y apellidos.
nombre.addEventListener("blur", function (event) {
  if (tieneNumero.test(nombre.value)) {
    insertarError("Este campo no puede contener números.", nombre);
  }
});

//Evento al perder el foco del campo fecha de nacimiento.
fecha.addEventListener("blur", function (event) {
  if (fecha.value.slice(0, 4) > 2010) {
    insertarError("El año de nacimiento debe ser anterior a 2010.", fecha);
  }
});

//Evento al enviar el formulario.
form.addEventListener("submit", function (event) {
  //Primero comprueba si contiene números, si no los contiene, que no sea por estar vacío.
  if (tieneNumero.test(nombre.value)) {
    event.preventDefault();
    insertarError("Este campo no puede contener números.", nombre);
  } else if (!nombre.value) {
    event.preventDefault();
    insertarError("Introduce nombre y apellidos.", nombre);
  }

  //Comprueba que el campo correo no esté vacío.
  if (!correo.value) {
    event.preventDefault();
    insertarError("Introduce un correo electrónico.", correo);
  }

  //Primero comprueba que el año sea posterior al 2010, si no lo es, que no sea por no introducir fecha.
  if (fecha.value.slice(0, 4) > 2010) {
    event.preventDefault();
    insertarError("El año de nacimiento debe ser anterior a 2010.", fecha);
  } else if (!fecha.value) {
    event.preventDefault();
    insertarError("Introduce una fecha de nacimiento.", fecha);
  }

  /** Lo comento porque no he conseguido validar los campos.
   * Si lo descomentas verás que siempre inserta el mensaje de error.
  
  if (!sexo.value) {
    event.preventDefault();
    insertarError("Marca un sexo.", sexo);
  }
  if (aficion.value) {
    event.preventDefault();
    insertarError("Marca al menos 1 afición.", aficion);
  }
  if (!ciudad.value) {
    event.preventDefault();
    insertarError("Selecciona una ciudad.", ciudad);
  }
*/

  //Comprueba que el campo del mensaje no esté vacío.
  if (!textArea.value) {
    event.preventDefault();
    insertarError("Introduce un mensaje de texto.", textArea);
  }
  event.preventDefault();
});
