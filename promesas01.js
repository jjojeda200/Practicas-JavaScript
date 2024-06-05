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

miPromesa
  .then((resultado) => {
    console.log(resultado); // Operación exitosa
  })
  .catch((error) => {
    console.error(error.message); // Algo salió mal
  });

function esperar(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}