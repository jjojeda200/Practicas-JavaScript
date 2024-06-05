# José Juan Ojeda Granados
# introducción a JavaScript
# Ejercicios básicos ordenados + o - por temas y origen de la información
***************************************************************************************
# Operaciones asíncronas
>[!note] Operación vs Método
>- **Operación Asíncrona:** Se refiere a cualquier tarea que no se ejecuta de manera sincrónica, es decir, no bloquea la ejecución del código. Puede ser una función asíncrona, una operación de lectura/escritura de archivos, una solicitud de red, entre otros.
>- **Método Asíncrono:** Es un método que está marcado con la palabra clave `async`. Permite que la función contenga operaciones asíncronas y devuelve una Promesa.
>
>***En resumen***, un método asíncrono es una función marcada con `async` que facilita la escritura de código asíncrono, mientras que una operación asíncrona se refiere a cualquier tarea que no se ejecuta de manera síncrona y puede ser manejada dentro de un método asíncrono o no.

## Introducción a Operaciones Asíncronas
- Explicar la naturaleza no bloqueante de JavaScript y la necesidad de manejar operaciones asíncronas para mejorar la eficiencia.
- Mencionar situaciones comunes, como consultas a bases de datos y llamadas a API, que son inherentemente asíncronas.

### Naturaleza no bloqueante de JavaScript
   - JavaScript es un lenguaje de programación de un solo hilo, lo que significa que ejecuta una tarea a la vez en un solo proceso. Sin embargo, su naturaleza no bloqueante permite realizar múltiples tareas sin detener la ejecución de otras operaciones.
   - La asincronía en JavaScript permite ejecutar operaciones en segundo plano mientras el programa principal sigue ejecutándose.

### Necesidad de operaciones asíncronas
- En aplicaciones web modernas, es común enfrentarse a tareas que llevan tiempo, como obtener datos de una base de datos o realizar llamadas a API externas.
- Si estas operaciones se realizaran de manera síncrona, podrían bloquear la ejecución de otras partes de la aplicación, resultando en una experiencia del usuario lenta y no receptiva.
- La introducción de operaciones asíncronas permite que el programa continúe ejecutándose mientras espera la finalización de tareas que podrían llevar tiempo.

### Situaciones comunes de asincronía
- **Consultas a Bases de Datos:** Las consultas a bases de datos son típicamente operaciones intensivas que pueden llevar tiempo. Utilizar operaciones asíncronas evita bloquear el hilo principal mientras se espera la respuesta de la base de datos.
- **Llamadas a API:** Al interactuar con servicios externos a través de API, las respuestas pueden demorar. Operaciones asíncronas permiten realizar estas llamadas sin afectar la capacidad de respuesta de la aplicación.
- **Manejo de Archivos:** Operaciones como la lectura o escritura de archivos también pueden ser operaciones lentas. La asincronía es esencial para mantener la capacidad de respuesta de la aplicación durante estas operaciones.

### Beneficios de operaciones asíncronas
   - Mejora la eficiencia y la capacidad de respuesta de la aplicación al evitar bloqueos innecesarios.
   - Permite gestionar múltiples tareas simultáneamente sin comprometer el rendimiento.
   - Facilita la construcción de aplicaciones más escalables y robustas al aprovechar al máximo los recursos del sistema.

## Promesas (Promises)
- Definir el concepto de promesas y su papel en la gestión de operaciones asíncronas.
- Ejemplificar la creación y resolución de promesas, así como el manejo de errores con `then()` y `catch()`.

### Concepto promises (promesas)
Las promesas son objetos en JavaScript que representan la eventual finalización (éxito o fallo) de una operación asíncrona. Su diseño está orientado a mejorar la legibilidad y manejo de código en situaciones donde se espera un valor en el futuro.

 Las promesas pueden estar en uno de estos tres estados:
- **Pendiente (pending)**: Estado inicial, ni cumplido ni rechazado.
- **Cumplido (fulfilled)**: Significa que la operación se completó con éxito.
- **Rechazado (rejected)**: Significa que la operación falló.

Las promesas permiten manejar operaciones asíncronas de una manera más limpia y manejable en comparación con el uso de `callbacks` anidados (conocidos como "callback hell").

### Concepto  Devolver una Promesa
En JavaScript, una **promesa** (Promise) es un objeto que representa la eventual finalización exitosa o fallida de una operación asincrónica y su valor resultante. Cuando una función "devuelve una promesa", está indicando que el resultado de esa función no estará disponible inmediatamente, sino en algún momento en el futuro.

### Creación de una Promesa
Una promesa se crea usando el constructor `Promise`. Este constructor toma una función ejecutora que tiene dos parámetros: `resolve` y `reject`.
- **`resolve`**: Se llama cuando la operación asincrónica se completa con éxito y devuelve el resultado.
- **`reject`**: Se llama cuando la operación asincrónica falla y devuelve un error.

### Sintaxis de Promesas
```javascript
let promesa = new Promise(function(resolve, reject) {
  // Código que ejecuta la operación asíncrona

  if (/* operación exitosa */) {
    resolve(value); // Indica que la operación se completó con éxito
  } else {
    reject(error);  // Indica que la operación falló
  }
});
```
- `resolve(value)`: Llama a esta función cuando la operación asíncrona se completa con éxito. `value` es el resultado de la operación.
- `reject(error)`: Llama a esta función cuando la operación asíncrona falla. `error` es el motivo del fallo.

### Métodos de Promesas
- `.then(onFulfilled, onRejected)`: Añade manejadores para los casos de éxito y fallo. Ambos argumentos son opcionales.
  - `onFulfilled`: Función que se ejecuta cuando la promesa se resuelve exitosamente.
  - `onRejected`: Función que se ejecuta cuando la promesa es rechazada.
- `.catch(onRejected)`: Añade un manejador para el caso de fallo. Es un atajo para `.then(null, onRejected)`.