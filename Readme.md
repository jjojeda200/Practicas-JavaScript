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

### Creación de promesas
Para crear una promesa, puedes usar el constructor `Promise`. Este toma una función con dos parámetros: `resolve` (para el caso de éxito) y `reject` (para el caso de error).

```js
const miPromesa = new Promise((resolve, reject) => {
  // Lógica asíncrona o tareas
  const exito = true;

  if (exito) {
    resolve("Operación exitosa");
  } else {
    reject(new Error("Algo salió mal"));
  }
});
```

### Devolución de una Promesa
Vamos a usar la función `esperar` como ejemplo:
```js
function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
```

### Resolución de promesas
Una vez que tienes una promesa, puedes usar los métodos `then()` y `catch()` para manejar los resultados. El método `then()` se ejecuta cuando la promesa se resuelve exitosamente, mientras que `catch()` maneja cualquier error que ocurra durante el proceso.
```js
miPromesa
  .then((resultado) => {
    console.log(resultado); // Operación exitosa
  })
  .catch((error) => {
    console.error(error.message); // Algo salió mal
  });
```

### Código funcional  (usando `Then`)
```js fold title:"Ejemplo con then"
// Función que devuelve una promesa que se resuelve después de 'ms' milisegundos
function esperar(ms) {
  // Crear una nueva promesa que se resuelve cuando el temporizador termina
  return new Promise((resolve) => {
    setTimeout(resolve, ms); // Resolver la promesa después de 'ms' milisegundos
  });
}

// Crear una nueva promesa
const miPromesa = new Promise((resolve, reject) => {
  // Aquí se puede colocar lógica asíncrona o cualquier tarea que se desee realizar
  const exito = true; // Variable que simula el éxito o fracaso de la operación

  if (exito) {
    // Si 'exito' es true, ejecutar la función 'esperar' para esperar 2 segundos
    esperar(2000).then(() => {
      // Cuando la espera de 2 segundos termine, resolver la promesa con un mensaje de éxito
      resolve("Operación exitosa");
    });
  } else {
    // Si 'exito' es false, rechazar la promesa con un mensaje de error
    reject(new Error("Algo salió mal"));
  }
});

// Manejo de la promesa creada anteriormente
miPromesa
  .then((resultado) => {
    // Si la promesa se resuelve exitosamente, imprimir el resultado
    console.log(resultado); // Debería imprimir: "Operación exitosa"
  })
  .catch((error) => {
    // Si la promesa se rechaza, imprimir el mensaje del error
    console.error(error.message); // Debería imprimir: "Algo salió mal"
  });
```

#### Flujo del código paso a paso
1. **Definición de la promesa:**
   ```javascript
   const miPromesa = new Promise((resolve, reject) => {
     const exito = true;

     if (exito) {
       esperar(2000).then(() => {
         resolve("Operación exitosa");
       });
     } else {
       reject(new Error("Algo salió mal"));
     }
   });
   ```
- `const miPromesa = new Promise((resolve, reject) => { ... });`:
    - Se crea una nueva promesa. La función pasada al constructor de `Promise` tiene dos parámetros, `resolve` y `reject`, que son funciones para resolver o rechazar la promesa respectivamente.
- `const exito = true;`:
    - Se define una variable `exito` que simula si la operación es exitosa o no.
 - `if (exito) { ... } else { ... }`:
    - Si `exito` es `true`, se ejecuta la función `esperar(2000)`:
        - `esperar(2000).then(() => { resolve("Operación exitosa"); });`:
            - `esperar(2000)` devuelve una promesa que se resuelve después de 2 segundos.
            - Cuando esta promesa se resuelve, se llama a `resolve("Operación exitosa")`, resolviendo `miPromesa` con el mensaje `"Operación exitosa"`.
    - Si `exito` es `false`, se llama a `reject(new Error("Algo salió mal"));`:
        - La promesa `miPromesa` se rechaza con un error que contiene el mensaje `"Algo salió mal"`.   - Aquí, se crea una nueva promesa `miPromesa`.
   - La función que se pasa al constructor de `Promise` recibe dos parámetros: `resolve` y `reject`.
   - Se define una variable `exito` con el valor `true`.
   - Se verifica si `exito` es `true`.
     - Si `exito` es `true`, se llama a la función `esperar` con un argumento de `2000` milisegundos (2 segundos). Cuando la espera termina, la promesa se resuelve con el mensaje `"Operación exitosa"`.
     - Si `exito` es `false`, la promesa se rechaza con un error que contiene el mensaje `"Algo salió mal"`.

2. **Manejo de la promesa:**
   ```javascript
   miPromesa
     .then((resultado) => {
       console.log(resultado);
     })
     .catch((error) => {
       console.error(error.message);
     });
   ```
  - `miPromesa.then((resultado) => { ... }).catch((error) => { ... });`:
    - Se maneja la resolución y el rechazo de la promesa.
- `.then((resultado) => { console.log(resultado); });`:
    - Si la promesa se resuelve, se imprime el resultado (`"Operación exitosa"`).
- `.catch((error) => { console.error(error.message); });`:
    - Si la promesa se rechaza, se imprime el mensaje del error (`"Algo salió mal"`).

3. **Función esperar:**
   ```javascript
   function esperar(ms) {
     return new Promise((resolve) => {
       setTimeout(resolve, ms);
     });
   }
   ```
 - `function esperar(ms) { ... }`:
    - Esta función recibe un número de milisegundos `ms` y retorna una nueva promesa.
- `return new Promise((resolve) => { ... });`:
    - Se crea una nueva promesa que se resuelve usando `resolve` después de `ms` milisegundos.
- `setTimeout(resolve, ms);`:
    - La función `setTimeout` espera `ms` milisegundos y luego llama a `resolve`, resolviendo así la promesa.

#### Análisis de Sintaxis
- **`new Promise((resolve, reject) => {...})`**: Crea una nueva instancia de `Promise`, la cual es un objeto que representa la eventual finalización (o falla) de una operación asíncrona.
- **`resolve` y `reject`**: Son funciones internas proporcionadas por la promesa para resolverla o rechazarla.
- **`esperar(ms)`**: Define una función que devuelve una promesa que se resuelve después de un número especificado de milisegundos.
- **`setTimeout`**: Función de JavaScript que ejecuta una función después de un período de tiempo especificado.

### Código funcional  (usando `await`)
```js
// Creación de una nueva promesa
const miPromesa = new Promise(async (resolve, reject) => {
  // Lógica asíncrona o tareas
  const exito = true;  // Variable que determina si la operación es exitosa

  // Condicional para determinar el flujo de la promesa
  if (exito) {
    // Si exito es true, esperamos 4 segundos antes de resolver la promesa
    await esperar(4000); // 4000 ms = 4 segundos
    // Resolución de la promesa con un mensaje de éxito
    resolve("Operación exitosa");
  } else {
    // Si exito es false, rechazamos la promesa con un mensaje de error
    reject(new Error("Algo salió mal"));
  }
});

// Manejo de la promesa creada anteriormente
miPromesa
  .then((resultado) => {
    // Si la promesa se resuelve, imprimimos el resultado en la consola
    console.log(resultado); // Operación exitosa
  })
  .catch((error) => {
    // Si la promesa es rechazada, imprimimos el mensaje de error en la consola
    console.error(error.message); // Algo salió mal
  });

// Definición de la función esperar
function esperar(ms) {
  // La función esperar devuelve una promesa que se resuelve después de un tiempo especificado
  return new Promise((resolve) => {
    // Uso de setTimeout para esperar el tiempo dado en milisegundos
    setTimeout(resolve, ms);
  });
}
```

#### Flujo del código paso a paso
1. **Definición de la promesa:**
   ```javascript
   const miPromesa = new Promise(async (resolve, reject) => {
     // Lógica asíncrona o tareas
     const exito = true;

     if (exito) {
       await esperar(4000); // 4000 ms = 4 segundos
       resolve("Operación exitosa");
     } else {
       reject(new Error("Algo salió mal"));
     }
   });
   ```
- `new Promise((resolve, reject) => { ... })`: Esto crea una nueva promesa. Una promesa en JavaScript es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante.
- `async (resolve, reject) => { ... }`: La función proporcionada al constructor de la promesa es una función asíncrona, lo que permite el uso de `await` dentro de ella.
- `const exito = true;`: Esta es una variable booleana que determina si la operación simulada tendrá éxito o no.
- `if (exito) { ... }`: Este condicional verifica si `exito` es `true`.
- `await esperar(4000);`: Si `exito` es `true`, se llama a la función `esperar` con un argumento de 4000 milisegundos. `await` se utiliza para pausar la ejecución de la función asíncrona hasta que la promesa devuelta por `esperar` se resuelva.
- `resolve("Operación exitosa");`: Después de esperar 4 segundos, se resuelve la promesa con el mensaje `"Operación exitosa"`.
- `reject(new Error("Algo salió mal"));`: Si `exito` es `false`, la promesa se rechaza inmediatamente con un objeto `Error` que contiene el mensaje `"Algo salió mal"`.

3. **Manejo de la promesa:**
   ```javascript
   miPromesa
     .then((resultado) => {
       console.log(resultado); // Operación exitosa
     })
     .catch((error) => {
       console.error(error.message); // Algo salió mal
     });
   ```
- `miPromesa.then((resultado) => { ... }).catch((error) => { ... });`: Aquí se manejan los resultados de la promesa utilizando los métodos `then` y `catch`.
- `.then((resultado) => { console.log(resultado); })`: Si la promesa se resuelve, se ejecuta la función proporcionada a `then` con el valor de resolución. En este caso, se imprime `"Operación exitosa"` en la consola.
- `.catch((error) => { console.error(error.message); })`: Si la promesa se rechaza, se ejecuta la función proporcionada a `catch` con el error. Aquí se imprime el mensaje del error `"Algo salió mal"` en la consola.

4. **Definición de la función `esperar`:**

   ```javascript
   function esperar(ms) {
     return new Promise((resolve) => {
       setTimeout(resolve, ms);
     });
   }
   ```
- `function esperar(ms) { ... }`: Esta es una función que toma un argumento `ms` que representa milisegundos.
- `return new Promise((resolve) => { setTimeout(resolve, ms); });`: La función devuelve una nueva promesa que se resuelve después de un tiempo especificado. `setTimeout` se utiliza para esperar el número de milisegundos proporcionados antes de resolver la promesa.

#### Análisis de la Sintaxis
1. **Promesa (`Promise`):**
   - `new Promise((resolve, reject) => { ... })`: Crea una nueva promesa que ejecuta la función pasada como argumento. Esta función recibe dos parámetros, `resolve` y `reject`, que se utilizan para resolver o rechazar la promesa, respectivamente.
2. **Función asíncrona (`async`):**
   - `async` antes de una función permite el uso de `await` dentro de ella para esperar la resolución de promesas.
3. **Condicional (`if`):**
   - `if (exito) { ... } else { ... }`: Estructura de control que ejecuta un bloque de código si `exito` es `true`, y otro bloque si es `false`.
4. **`await`:**
   - `await esperar(4000)`: Pausa la ejecución de la función asíncrona hasta que la promesa devuelta por `esperar` se resuelva.
5. **Resolución y rechazo (`resolve`, `reject`):**
   - `resolve("Operación exitosa")`: Resuelve la promesa con el valor `"Operación exitosa"`.
   - `reject(new Error("Algo salió mal"))`: Rechaza la promesa con un objeto `Error` que contiene el mensaje `"Algo salió mal"`.
6. **Manejo de la promesa (`then`, `catch`):**
   - `.then((resultado) => { ... })`: Se ejecuta cuando la promesa se resuelve, recibiendo el valor de resolución.
   - `.catch((error) => { ... })`: Se ejecuta cuando la promesa se rechaza, recibiendo el error.


## Ejemplo I
Es puede ver este código integrado en un ejemplo funcional en el documento de [[JavaScript - 00-01 AJAX#Integración del código Operaciones Asíncronas I|Ajax]]
Un ejemplo que simula una operación asíncrona con un temporizador:
```javascript
function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;

      if (exito) {
        resolve("Operación completada correctamente");
      } else {
        reject(new Error("Error en la operación"));
      }
    }, 1000);
  });
}

// Uso de la promesa
operacionAsincrona()
  .then((resultado) => {
    console.log(resultado); // Operación completada correctamente
  })
  .catch((error) => {
    console.error(error.message); // Error en la operación
  });
```
Este ejemplo demuestra cómo las promesas facilitan la gestión de operaciones asíncronas al proporcionar una estructura clara y manejable para el éxito y el manejo de errores.

#### Definición de la Función `operacionAsincrona`
```javascript
function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;

      if (exito) {
        resolve("Operación completada correctamente");
      } else {
        reject(new Error("Error en la operación"));
      }
    }, 1000);
  });
}
```
1. **Declaración de la Función**:
   - `function operacionAsincrona() { ... }`: Define una función llamada `operacionAsincrona` que no recibe parámetros.
2. **Creación de una Promesa**:
   - `return new Promise((resolve, reject) => { ... });`: La función devuelve una nueva promesa. Las promesas en JavaScript son objetos que representan la eventual finalización (o falla) de una operación asíncrona y su valor resultante.
3. **Ejecutando una Operación Asíncrona con `setTimeout`**:
   - `setTimeout(() => { ... }, 1000);`: Utiliza `setTimeout` para simular una operación asíncrona. El primer argumento es una función callback que se ejecutará después de 1000 milisegundos (1 segundo).
4. **Simulación del Resultado de la Operación**:
   - `const exito = true;`: Define una constante `exito` que se establece en `true`, simulando una operación exitosa. En un escenario real, este valor podría depender de condiciones dinámicas.
5. **Resolviendo o Rechazando la Promesa**:
   - `if (exito) { resolve("Operación completada correctamente"); }`: Si `exito` es `true`, se llama a `resolve` con un mensaje de éxito.
   - `else { reject(new Error("Error en la operación")); }`: Si `exito` es `false`, se llama a `reject` con un nuevo objeto `Error`.

#### Uso de la Promesa
```javascript
operacionAsincrona()
  .then((resultado) => {
    console.log(resultado); // Operación completada correctamente
  })
  .catch((error) => {
    console.error(error.message); // Error en la operación
  });
```
1. **Llamada a la Función**:
   - `operacionAsincrona()`: Llama a la función `operacionAsincrona`, que devuelve una promesa.
2. **Manejo del Resultado con `then`**:
   - `.then((resultado) => { console.log(resultado); })`: El método `then` se utiliza para manejar el resultado cuando la promesa se resuelve exitosamente. En este caso, se imprime el resultado en la consola.
3. **Manejo del Error con `catch`**:
   - `.catch((error) => { console.error(error.message); })`: El método `catch` se utiliza para manejar errores cuando la promesa es rechazada. En este caso, se imprime el mensaje de error en la consola.

## Ejemplo II - Funcional
Imaginemos que queremos hacer una solicitud HTTP a una API para obtener datos de un servidor. Podemos usar [[JavaScript - 10-08 Fetch|fetch]], que devuelve una promesa, y manejar el resultado de la siguiente manera:
```js
function obtenerDatosDeAPI() {
  // Hacemos una solicitud a una API ficticia para obtener datos
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // Verificamos si la respuesta es exitosa
      if (!response.ok) {
        // Si la respuesta no es exitosa, lanzamos un error
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      // Convertimos la respuesta a formato JSON
      return response.json();
    });
}

// Uso de la función para obtener datos de la API
obtenerDatosDeAPI()
  .then(datos => {
    // Manejo de los datos obtenidos
    console.log('Datos obtenidos:', datos);
  })
  .catch(error => {
    // Manejo de errores
    console.error('Error:', error.message);
  });
```
En este ejemplo, `fetch` devuelve una promesa que se resuelve con la respuesta de la solicitud.
Si la respuesta no es exitosa, se lanza un error que se captura en el bloque `catch`, esto lo podemos provocar añadiendo cual dígito después de /posts.

### Explicación Detallada del Código

#### Función `obtenerDatosDeAPI`
1. **Realización de la Solicitud HTTP**:
    - `fetch('https://jsonplaceholder.typicode.com/posts')`: Hacemos una solicitud HTTP a una API ficticia (JSONPlaceholder, que es una API pública para pruebas).
2. **Manejo de la Respuesta**:
    - `.then(response => { ... })`: Utilizamos el método `then` para manejar la respuesta de la solicitud.
        - `if (!response.ok) { throw new Error('Error en la solicitud: ' + response.statusText); }`: Verificamos si la respuesta no es exitosa (status diferente de 200). Si es así, lanzamos un error con el mensaje correspondiente.
        - `return response.json();`: Si la respuesta es exitosa, convertimos el cuerpo de la respuesta a formato JSON y lo retornamos.

#### Uso de la Función `obtenerDatosDeAPI`
1. **Llamada a la Función**:
    - `obtenerDatosDeAPI()`: Llamamos a la función que devuelve una promesa.
2. **Manejo del Resultado con `then`**:
    - `.then(datos => { console.log('Datos obtenidos:', datos); })`: Si la promesa se resuelve exitosamente, imprimimos los datos obtenidos en la consola.
3. **Manejo del Error con `catch`**:
    - `.catch(error => { console.error('Error:', error.message); })`: Si la promesa es rechazada, capturamos el error y mostramos el mensaje de error en la consola.
Este código es completamente funcional y puede ser ejecutado en cualquier entorno que soporte JavaScript moderno, como un navegador web con soporte para `fetch` (la mayoría de los navegadores actuales) o Node.js con el módulo `node-fetch`.

### Ejecución
Para ejecutar este código:
1. **En un Navegador**:
        - Puedes copiar y pegar el código directamente en la consola de tu navegador y ejecutarlo.
2. **En un Entorno Node.js**:
    - Primero, instala el módulo `node-fetch` ejecutando `npm install node-fetch`.
    - Luego, modifica el código para usar `require` para importar `node-fetch` y ejecuta el script con Node.js:
```js
async function obtenerDatosDeAPI() {
    const fetch = (await import('node-fetch')).default;
  
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json();
      });
  }

obtenerDatosDeAPI()
  .then(datos => {
    console.log('Datos obtenidos:', datos);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```
Este ejemplo te proporciona un punto de partida para trabajar con solicitudes HTTP y manejo de promesas en JavaScript, aplicable tanto en navegadores como en entornos Node.js.