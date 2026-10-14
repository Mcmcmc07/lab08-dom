# Tarea: Mi componente interactivo

## Componente elegido

Elegí una lista de tareas pendientes que permite organizar actividades y llevar un control de las tareas completadas.

## Version 1: solo DOM

**Qué agregué:** Creé la estructura HTML de la página y utilicé JavaScript para seleccionar la lista y agregar tres tareas mediante `createElement()` y `appendChild()`.

**Por qué:** Quise comenzar con una versión sencilla para comprender cómo JavaScript puede crear y modificar elementos HTML.

**Qué cambió en el comportamiento:** La página muestra tres tareas de ejemplo, pero todavía no permite interactuar con ellas.

```js
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
```

## Version 2: con eventos

_Pendiente de desarrollar._

## Version 3: con clases y objetos

_Pendiente de desarrollar._

## Donde uso DOM, eventos y objetos

_Pendiente de completar con el código final._

## Pruebas realizadas

_Pendiente de completar después de probar la versión final._

## Por que disene asi mi clase

_Pendiente de completar después de crear la clase._
