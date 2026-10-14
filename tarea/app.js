class Tarea {
  constructor(nombre) {
    this.nombre = nombre;
    this.completada = false;
  }

  completar() {
    this.completada = !this.completada;
  }

  obtenerDescripcion() {
    return this.nombre;
  }
}

const formTarea = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");

const tareas = [
  new Tarea("Estudiar JavaScript"),
  new Tarea("Completar el laboratorio"),
  new Tarea("Subir el proyecto a GitHub"),
];

function mostrarTareas() {
  listaTareas.innerHTML = "";

  tareas.forEach((tarea, indice) => {
    const elemento = document.createElement("li");
    elemento.classList.add("tarea");

    const texto = document.createElement("span");
    texto.textContent = tarea.obtenerDescripcion();

    if (tarea.completada) {
      texto.classList.add("completada");
    }

    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = tarea.completada ? "Deshacer" : "Completar";
    botonCompletar.dataset.accion = "completar";
    botonCompletar.dataset.indice = indice;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");
    botonEliminar.dataset.accion = "eliminar";
    botonEliminar.dataset.indice = indice;

    elemento.appendChild(texto);
    elemento.appendChild(botonCompletar);
    elemento.appendChild(botonEliminar);

    listaTareas.appendChild(elemento);
  });
}

nombreTarea.addEventListener("input", () => {
  mensaje.textContent = "";
});

formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = nombreTarea.value.trim();

  if (texto === "") {
    mensaje.textContent = "Escribe una tarea antes de agregarla.";
    mensaje.style.color = "red";
    return;
  }

  const nuevaTarea = new Tarea(texto);
  tareas.push(nuevaTarea);

  mostrarTareas();

  nombreTarea.value = "";
  mensaje.textContent = "Tarea agregada correctamente.";
  mensaje.style.color = "green";
});

listaTareas.addEventListener("click", (evento) => {
  const boton = evento.target.closest("button");

  if (!boton) {
    return;
  }

  const indice = Number(boton.dataset.indice);
  const accion = boton.dataset.accion;

  if (accion === "completar") {
    tareas[indice].completar();
    mostrarTareas();
  } else if (accion === "eliminar") {
    tareas.splice(indice, 1);
    mostrarTareas();
    mensaje.textContent = "Tarea eliminada.";
    mensaje.style.color = "green";
  }
});

mostrarTareas();
