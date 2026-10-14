const formTarea = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const listaTareas = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");

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

  const elemento = document.createElement("li");
  elemento.classList.add("tarea");

  const textoElemento = document.createElement("span");
  textoElemento.textContent = texto;

  const botonCompletar = document.createElement("button");
  botonCompletar.textContent = "Completar";

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("eliminar");

  elemento.appendChild(textoElemento);
  elemento.appendChild(botonCompletar);
  elemento.appendChild(botonEliminar);
  listaTareas.appendChild(elemento);

  nombreTarea.value = "";
  mensaje.textContent = "Tarea agregada correctamente.";
  mensaje.style.color = "green";
});

listaTareas.addEventListener("click", (evento) => {
  if (evento.target.textContent === "Completar") {
    const elemento = evento.target.parentElement;
    const texto = elemento.querySelector("span");
    texto.classList.toggle("completada");

    if (texto.classList.contains("completada")) {
      evento.target.textContent = "Deshacer";
    } else {
      evento.target.textContent = "Completar";
    }
  } else if (evento.target.textContent === "Deshacer") {
    const elemento = evento.target.parentElement;
    const texto = elemento.querySelector("span");
    texto.classList.toggle("completada");
    evento.target.textContent = "Completar";
  } else if (evento.target.textContent === "Eliminar") {
    evento.target.parentElement.remove();
  }
});
