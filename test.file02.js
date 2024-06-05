// Importar los módulos necesarios (https, fs, Express)
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');

// Crear una aplicación Express
const app = express();

// Carga los certificados
const options = {
  key: fs.readFileSync(__dirname + '/Cert/server.key'),
  cert: fs.readFileSync(__dirname + '/Cert/server.cert')
};

// Define puerto de escucha
const port = 3000;

const server = https.createServer(options, app);

// ...

// Define el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'Publica')));
// app.use(express.static(__dirname));

/* app.get("/", (req, res) => {
  // Enviar la página principal
  res.sendFile(__dirname + "/index.html");
}); */

app.get("/", (req, res) => {
  // Enviar la página principal
  res.sendFile(path.join(__dirname, "index.html"));
});

// ...


server.listen(port, () => {
  console.log(`Servidor HTTPS escuchando en el puerto ${port}`);
});


/*
app.get("/", (req, res) => {
  // Enviar la página principal
  const filePath = __dirname + "/index.html";
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.send('¡Hola, Cloooo con HTTPS!');
  }
});
*/
