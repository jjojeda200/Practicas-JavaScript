const pruebaGET = () => {
  fetch('https://jsonplaceholder.typicode.com/users/1')
  //.then(respuesta => console.log(respuesta, "\nEstatus: ", respuesta.status))
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log(datos)
    document.querySelector('#nombre-usuario').textContent = datos.name
    document.querySelector('#correo-usuario').textContent = datos.email
  })
  .catch(error => console.log(error));
};

const pruebaPOST = () => {
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: 'Jose Sebastian',
      correo: 'ns@mail.com'
    }),
  }).then(respuesta => respuesta.json())
    .then(datos => console.log(datos))
};

const pruebaPUT = () => {
  fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: 'Jose Sebastian',
      correo: 'ns@mail.com'
    }),
  }).then(respuesta => respuesta.json())
    .then(datos => console.log(datos))
};

const pruebaPATCH = () => {
  fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nombre: 'Juan Sebastian',
      correo: 'JuanS'
    }),
  }).then(respuesta => respuesta.json())
    .then(datos => console.log(datos))
};

const pruebaDELETE = () => {
  fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'DELETE',
  })
  .then(respuesta => respuesta.json())
  .then(datos => console.log(datos))
};

// pruebaDELETE();
// pruebaPATCH();
// pruebaPUT();
// pruebaPOST();
// pruebaGET();

const pruebaGetAsync = async () => {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

pruebaGetAsync();