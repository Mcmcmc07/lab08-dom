const listaTareas = document.querySelector("#listaTareas");

const tarea1 = document.createElement("li");
tarea1.textContent = "Estudiar JavaScript";
tarea1.classList.add("tarea");
listaTareas.appendChild(tarea1);

const tarea2 = document.createElement("li");
tarea2.textContent = "Completar el laboratorio";
tarea2.classList.add("tarea");
listaTareas.appendChild(tarea2);

const tarea3 = document.createElement("li");
tarea3.textContent = "Subir el proyecto a GitHub";
tarea3.classList.add("tarea");
listaTareas.appendChild(tarea3);
