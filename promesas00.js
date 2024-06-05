  const miPromesa = new Promise((resolve, reject) => {
    // Lógica asíncrona o tareas
    const exito = true;
  
    if (exito) {
      esperar(2000).then(() => {
        resolve("Operación exitosa");
      });
    } else {
      reject(new Error("Algo salió mal"));
    }
  });

  miPromesa
  .then((resultado) => {
    console.log(resultado);       // Operación exitosa
  })
  .catch((error) => {
    console.error(error.message); // Algo salió mal
  });

  function esperar(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
