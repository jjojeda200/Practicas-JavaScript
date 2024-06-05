function obtenerDatosDeAPI() {
  // Hacemos una solicitud a una API ficticia para obtener datos
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
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