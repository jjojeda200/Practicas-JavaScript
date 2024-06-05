async function esperandoDatos() {
  return "Esperando datos";
}

function datosRecibidos() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve("Datos recibidos"), 2000);
    setTimeout(() => reject("Datos no recibidos"), 2000);
  });
}

/* 
async function getDatos() {
  const data = await datosRecibidos();
  console.log(data); // Output: Datos recibidos (después de 2 segundos)
}
*/
async function getDatos() {
  try {
    const data = await datosRecibidos();
    console.log(data); // Output: Datos recibidos (después de 2 segundos)
  } catch (error) {
    console.error("Error:", error);
  }
}

esperandoDatos().then(console.log);
getDatos();