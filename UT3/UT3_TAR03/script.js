"use strict";

/** Realiza una web del tipo TODO list donde puedas ir guardando tareas
    y prioridad (alta, media, baja) y las vaya mostrando 
    por orden de prioridad al pulsar un boton. 
*/

let tasks = [];

let saveTask = document.querySelector("#saveTask");
saveTask.addEventListener("click", function (event) {

  let taskNum = document.getElementById("number").value;
  let task = document.getElementById("task").value;
  let prio = document.getElementById("priority").value;

  let newTask = {
    id: taskNum,
    type: task,
    priority: prio,
  };
  tasks.push(newTask);
  localStorage.setItem(taskNum, JSON.stringify(task))
});

let showTasks = document.querySelector("#showTasks");
showTasks.addEventListener("click", function (event) {

  tasks = tasks.sort((a, b) => {
    let ordenPrioridad = { alta: 1, media: 2, baja: 3 }
    return ordenPrioridad[a.priority] - ordenPrioridad[b.priority]
  })

  let subtitle = document.createElement("h2");
  subtitle.setAttribute("class", "subtitle")
  subtitle.textContent = "Tareas guardadas";
  removeTasks.insertAdjacentElement("afterend", subtitle);

  tasks.forEach((object) => {
    let div = document.createElement("div");
    div.setAttribute("style", "border: 1px solid black;");
    div.setAttribute("class", "tarea");

    let num = document.createElement("p");
    num.textContent = `Id task: ${object.id}`;
    div.appendChild(num);

    let tar = document.createElement("p");
    tar.textContent = `Tipo de tarea: ${object.type}`;
    div.appendChild(tar);

    let prio = document.createElement("p");
    prio.textContent = `Prioridad de tarea: ${object.priority}`;
    div.appendChild(prio);

    document.body.insertAdjacentElement("beforeend", div);
  });
});

let removeTasks = document.querySelector("#removeTasks");
removeTasks.addEventListener("click", function (event) {
  let subtitle = document.querySelector(".subtitle")
  subtitle.remove()
  let tareas = document.querySelectorAll(".tarea")
  tareas.forEach(tarea => {
    tarea.remove()
  })
  localStorage.clear()
  tasks = []
});
