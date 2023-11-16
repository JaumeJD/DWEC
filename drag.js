"use strict"

let caja = document.querySelector(".caja");
caja.draggable = true; // Hacemos el elemento arrastrable
let contenedor = document.querySelector(".contenedor");
contenedor.addEventListener("dragenter", e => {
    console.log("dragenter");
    //el elemento draggable empieza a entrar cuanto entra
    //el puntero del ratón
});
contenedor.addEventListener("dragleave", e => {
    console.log("dragleave");
    //el elemento draggable empieza a salir cuanto sale el
    //puntero del ratón
});
contenedor.addEventListener("dragover", e => {
    e.preventDefault();//Necesario para que ejecute el drop
    console.log("dragover");
});
contenedor.addEventListener("drop", e => {
    //Se ejecuta cuando se suelta la caja dentro del contenedor.
    console.log("drop");
    contenedor.appendChild(caja);
});
caja.addEventListener("dragstart", e => {
    //Se ejecuta cuando al empezar a arrastrar la caja.
    console.log("dragstart");
});
caja.addEventListener("drag", e => {
    //Se ejecuta constantemente mientras arrastres la caja.
    console.log("drag");
});
caja.addEventListener("dragend", e => {
    //Se ejecuta al soltar la caja.
    console.log("dragend");
});
