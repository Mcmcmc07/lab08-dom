# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: Microsoft Edge

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción                  | Qué cambió en la pantalla                             | Se mantiene al recargar (Sí/No) |
| ---------------------------- | ----------------------------------------------------- | ------------------------------- |
| textContent desde la consola | El título cambió a "Hola desde la consola".           | No                              |
| textContent desde app.js     | El título cambió a "Hola TECSUP".                     | Sí                              |
| style.color                  | El título cambió a color azul.                        | Sí                              |
| classList.add                | El párrafo obtuvo un fondo amarillo.                  | Sí                              |
| createElement + appendChild  | Se agregó "JavaScript" a la lista junto a HTML y CSS. | Sí                              |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara                             | Cuánto suma por acción |
| -------------- | ------------------------------------------------- | ---------------------- |
| click          | Un click sobre el botón Sumar 1.                  | 1                      |
| dblclick       | Dos clicks seguidos sobre el botón Sumar 1.       | 1                      |
| mouseover      | Pasar el cursor del mouse sobre el botón Sumar 1. | 1                      |

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Qué pasó en la pantalla                                                                                              | Se recargó la página (Sí/No) |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | El saludo cambió letra por letra mientras escribía el nombre.                                                        | No                           |
| Enviar sin preventDefault               | El mensaje "Enviado" apareció por un instante y desapareció al recargarse la página. El campo de correo quedó vacío. | Sí                           |
| Enviar con preventDefault, correo sin @ | Apareció el mensaje "Correo no válido: falta @" en rojo.                                                             | No                           |
| Enviar con preventDefault, correo con @ | Apareció el mensaje "Enviado" junto con el correo ingresado.                                                         | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------- | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875               |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90                 |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510                |

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la página                  | Correcto (Sí/No) |
| --------------- | -------------------------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                                        | Sí               |
| + Lapicero 3.20 | 15.70                                        | Sí               |
| + Mochila 89.90 | 105.60                                       | Sí               |
| Sin Number()    | Error: this.precio.toFixed is not a function | Sí               |

| Pieza  | Línea de tu código donde aparece                                           | Para qué sirve                                                |
| ------ | -------------------------------------------------------------------------- | ------------------------------------------------------------- |
| DOM    | document.querySelector("#carrito")                                         | Selecciona el elemento HTML donde se muestran los productos.  |
| Evento | formProducto.addEventListener("submit", (evento) => {                      | Ejecuta el código cuando se envía el formulario.              |
| Objeto | const producto = new Producto(prodNombre.value, Number(prodPrecio.value)); | Crea un objeto Producto con el nombre y el precio ingresados. |
