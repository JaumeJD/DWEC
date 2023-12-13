"use strict";

let crear = document.querySelector(".crearBotones");
crear.addEventListener("click", function (event) {
  let nBotones = document.getElementById("nBotones");

  //Punto de referencia para insertar los nuevos botones.
  let ubicacion = document.querySelector(".crearBotones");

  //Bucle que toma el valor de nBotones para crear tantos como haya pedido el usuario.
  for (let i = 0; i < nBotones.value; i++) {
    let button = document.createElement("button");

    //Se les añade a todos el mismo id para eliminarlos posteriormente.
    button.id = "nuevo";
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    button.textContent = `rgb(${r},${g}${b})`;
    button.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b})`);

    //Evento de cada nuevo boton donde, al clicar, vuelve el fondo de la página de su color.
    button.addEventListener("click", function (event) {
      document.body.setAttribute(
        "style",
        `background-color: rgb(${r}, ${g}, ${b})`
      );
    });

    //Inserccion del nuevo boton.
    ubicacion.insertAdjacentElement("afterend", button);
  }
});

let reiniciar = document.querySelector(".reiniciar");
reiniciar.addEventListener("click", function (event) {
  //Recoge el valor del input al clicar en Reiniciar y vuelve por defecto.
  let nBotones = document.querySelector("input");
  nBotones.value = "";

  //Elimina el atributo style de body para que vuelva a ser blanco.
  document.body.removeAttribute("style");

  //Recoge todos los elementos cuyo id=nuevo, los recorre y los elimina.
  let buttons = document.querySelectorAll("#nuevo");
  buttons.forEach((button) => {
    button.remove();
  });
});
