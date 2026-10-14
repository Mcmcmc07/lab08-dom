# Tarea: Mi componente interactivo

## Componente elegido

Elegí una lista de tareas pendientes que permite organizar actividades y llevar un control de las tareas completadas.

## Versión 1: solo DOM

**Qué agregué:** Creé la estructura HTML de la página y utilicé JavaScript para seleccionar la lista y agregar tres tareas mediante `createElement()` y `appendChild()`.

**Por qué:** Quise comenzar con una versión sencilla para comprender cómo JavaScript puede crear y modificar elementos HTML.

**Qué cambió en el comportamiento:** La página muestra tres tareas de ejemplo, pero todavía no permite interactuar con ellas.

## Versión 2: con eventos

En esta versión agregué un formulario para ingresar tareas, botones para completarlas y eliminarlas, y mensajes para informar al usuario sobre el resultado de sus acciones.

Utilicé los eventos `submit`, `input` y `click`. También agregué una validación para impedir que se registren tareas vacías y utilicé `preventDefault()` para evitar que la página se recargue al enviar el formulario.

El comportamiento cambió porque ahora el usuario puede interactuar con la lista. Sin embargo, todavía no se utiliza una clase propia para representar las tareas.

## Versión 3: con clases y objetos

En esta versión creé la clase `Tarea`, que representa cada actividad de la lista mediante un objeto. Utilicé el constructor para inicializar el nombre de la tarea y su estado de completado. También agregué métodos para cambiar su estado y obtener su descripción.

La función `mostrarTareas()` actualiza la interfaz a partir de los objetos almacenados en un arreglo. De esta manera, los eventos modifican los objetos y luego se actualiza la página para mostrar los cambios.

El comportamiento mejoró porque cada tarea tiene su propio estado y la creación, modificación y eliminación se encuentran organizadas de forma más clara.

## Dónde usó DOM, eventos y objetos

| Parte   | Código del programa                          | Para qué sirve                                               |
| ------- | -------------------------------------------- | ------------------------------------------------------------ |
| DOM     | `document.createElement("li")`               | Crea un elemento HTML para mostrar una tarea.                |
| DOM     | `listaTareas.appendChild(elemento)`          | Agrega la tarea creada a la lista de la página.              |
| Eventos | `formTarea.addEventListener("submit", ...)`  | Procesa el formulario cuando el usuario agrega una tarea.    |
| Eventos | `nombreTarea.addEventListener("input", ...)` | Borra el mensaje anterior cuando el usuario escribe.         |
| Eventos | `listaTareas.addEventListener("click", ...)` | Detecta si el usuario quiere completar o eliminar una tarea. |
| Objetos | `new Tarea(texto)`                           | Crea un objeto con el nombre y el estado de una tarea.       |
| Objetos | `tareas[indice].completar()`                 | Cambia el estado de completado del objeto seleccionado.      |

## Pruebas realizadas

| Acción                              | Resultado esperado                              | Resultado obtenido                  | ¿Cumple? |
| ----------------------------------- | ----------------------------------------------- | ----------------------------------- | -------- |
| Agregar una tarea válida            | La tarea aparece en la lista.                   | La tarea aparece en la lista.       | Sí       |
| Enviar el formulario vacío          | Aparece un mensaje de validación.               | Aparece el mensaje rojo.            | Sí       |
| Completar una tarea                 | El texto queda tachado.                         | El texto queda tachado.             | Sí       |
| Deshacer una tarea                  | El texto vuelve a su estado normal.             | El texto vuelve a su estado normal. | Sí       |
| Eliminar una tarea                  | La tarea desaparece de la lista.                | La tarea desaparece de la lista.    | Sí       |
| Eliminar una tarea y completar otra | Los botones actúan sobre la tarea seleccionada. | Comprobar durante la prueba.        | Sí/No    |

## Por qué diseñé así mi clase

Diseñé la clase `Tarea` con los atributos `nombre` y `completada` porque cada actividad necesita un texto que la identifique y un estado que indique si está terminada. El método `completar()` permite cambiar ese estado sin modificar directamente el atributo desde el evento, mientras que `obtenerDescripcion()` devuelve el nombre que se muestra en la página. Así, cada objeto representa una tarea independiente y el código resulta más organizado y fácil de mantener.
