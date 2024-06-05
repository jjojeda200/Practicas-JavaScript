const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

const port = 3000;

const server = https.createServer(options, app);

app.get('/', (req, res) => {
  res.send('¡Hola, Clo con HTTPS!');
});

server.listen(port, () => {
  console.log(`Servidor HTTPS escuchando en el puerto ${port}`);
});
