"use strict";

//Actua de manera asíncrona.
fetch("../recursos/texto.txt")
  .then((response) => response.text())
  .then(console.log);

//Mostrará primero el bucle y luego el fetch.
for (let i = 0; i < 1000; i++) {
  console.log(i);
}

/**  DESGLOSE DEL FETCH SUPERIOR

 fetch("../recursos/texto.txt")
   .then(function (respuesta) {
     let miTexto = respuesta.text();
     return miTexto;
   })
   .then(function (respuesta) {
     console.log(respuesta);
   });

*/
