"use strict";

document.addEventListener("dblclick", function (event) {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  document.body.setAttribute(
    "style",
    `background-color: rgb(${r}, ${g}, ${b});`
  );
});
