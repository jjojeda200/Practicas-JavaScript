function calcularPromedio(numeros) {
  const total = numeros.reduce((acc, numero) => acc + numero, 0);
  return total / numeros.length;
}

const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello This is LinuxHint! and I am Sam");

  const numeros = [5.0, 7.0, 3.5, 8.2, 4.9];
  const promedio = calcularPromedio(numeros);
  console.log(`El promedio es: ${promedio}`);
});
server.listen(port, () => {
  console.log(`Listening Port ${port}`);
});
