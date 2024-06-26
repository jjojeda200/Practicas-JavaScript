const pruebaFetch = () => {
  const url = "https://dogapi.dog/api/v2/breeds";

  // Obtener los datos
  fetch(url)
    .then((respuesta) => {
      // Verificar si la respuesta es exitosa (código de estado en el rango 200)
      if (!respuesta.ok) {
        throw new Error(`¡Error HTTP! estado: ${respuesta.status}`);
      }

      // Convierte la respuesta a JSON y la pasa a la siguiente promesa.
      return respuesta.json();
    })
    .then((datos) => {
      // Establecer los datos obtenidos en el estado
      console.log(datos.data);
    })
    .catch((error) => {
      console.error("Error al obtener datos:", error.message);
    });
};

pruebaFetch();