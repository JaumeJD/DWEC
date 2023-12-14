"use strict";

let cont = 0;
let form = document.createElement("form");
form.setAttribute("action", "https://formsubmit.co/jgarveg163@iesmartinezm.es");
form.setAttribute("method", "post");
form.setAttribute("style", "display: flex; flex-direction: column; gap: 16px;");

while (cont < 2) {
  let div = document.createElement("div");
  div.setAttribute("style", "display: flex; flex-direction: column;");
  form.appendChild(div);

  let label = document.createElement("label");
  label.setAttribute("for", `text${cont + 1}`);
  label.textContent = `Texto nº${cont + 1}`;
  label.setAttribute("style", "font-weight: bold;");
  div.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("id", `text${cont + 1}`);
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Introduce una palabra...");
  input.setAttribute(
    "style",
    "border-radius: 6px; width: 180px; padding: 6px;"
  );
  div.appendChild(input);

  cont++;
}
document.body.appendChild(form);

let button = document.createElement("input");
button.setAttribute("type", "button");
button.textContent = "Enviar";
button.setAttribute("style", "width: 100px; padding: 4px; border-radius: 6px;");
button.addEventListener("click", function (event) {
  let text1 = document.getElementById("text1").value;
  let text2 = document.getElementById("text2").value;
  console.log(text1);
  console.log(text2);
  
  //
  form.submit();
});
form.appendChild(button);

let validarAnagrama = (text1, text2) => {
  text1.toLowerLocaleCase();
  text2.toLowerLocaleCase();
};
