// Función que devuelve una promesa que se resuelve después de un cierto tiempo
function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Función asíncrona que espera un cierto tiempo antes de devolver un mensaje
async function obtenerMensaje() {
  await esperar(2000); // Espera 2 segundos
  return "¡Hola mundo!";
}

// Función principal que ejecuta la función asíncrona y maneja el resultado
async function principal() {
  console.log("Inicio...");

  try {
    const mensaje = await obtenerMensaje(); // Espera a que se resuelva la promesa
    console.log(mensaje); // Imprime el mensaje cuando esté disponible
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }

  console.log("Fin...");
}

// Llamar a la función principal para iniciar la ejecución
principal();