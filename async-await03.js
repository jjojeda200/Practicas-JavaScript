// Función que devuelve una promesa que se resuelve después de un cierto tiempo
function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Función asíncrona que espera un cierto tiempo antes de devolver un mensaje
async function obtenerMensaje1() {
  await esperar(4000); // Espera 2 segundos
  console.log("Fin Await 1");
  return "¡Hola desde la primera función!";
}

// Función asíncrona que espera un cierto tiempo antes de devolver un mensaje
async function obtenerMensaje2() {
  await esperar(2000); // Espera 1 segundo
  console.log("Fin Await 2")
  return "¡Hola desde la segunda función!";
}

// Función principal que ejecuta las funciones asíncronas en paralelo y maneja los resultados
async function principal() {
  console.log("Inicio...");

  try {
    // Ejecutar ambas funciones en paralelo y esperar a que ambas promesas se resuelvan
    const [mensaje1, mensaje2] = await Promise.all([obtenerMensaje1(), obtenerMensaje2()]);
    
    console.log(mensaje1); // Imprimir el primer mensaje
    console.log(mensaje2); // Imprimir el segundo mensaje
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }

  console.log("Fin...");
}

// Llamar a la función principal para iniciar la ejecución
principal();