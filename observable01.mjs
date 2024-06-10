// Importamos la clase Observable de RxJS 
// Descomentar la que proceda

// Requiere extención mjs - Como módulo ECMAScript (ES)
import { Observable } from 'rxjs'; 

// Requiere extención js - Como módulo sintaxis de CommonJS
// const { Observable } = require('rxjs');

// Creamos una función asincrónica que simula una operación que toma un tiempo
function operacionAsincronica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Operación completada');
    }, 2000); // Simulamos un tiempo de espera de 2 segundos
  });
}

// Creamos un observable a partir de la función asincrónica
const observable = new Observable((observer) => {
  operacionAsincronica().then((resultado) => {
    // Cuando la operación asíncrona se completa, notificamos al observador con el resultado
    observer.next(resultado);
    // Indicamos que hemos completado la emisión de valores
    observer.complete();
  }).catch((error) => {
    // Si hay un error, notificamos al observador
    observer.error(error);
  });
});

// Subscribimos a nuestro observable para recibir los valores emitidos
const subscription = observable.subscribe({
  next: (value) => console.log(value), // Manejamos el valor emitido
  error: (error) => console.error(error), // Manejamos cualquier error
  complete: () => console.log('Observable completado'), // Manejamos la finalización del observable
});

// Cancelamos la suscripción después de 3 segundos
setTimeout(() => {
  subscription.unsubscribe(); // Esto evitará que sigamos recibiendo notificaciones del observable
}, 6000);