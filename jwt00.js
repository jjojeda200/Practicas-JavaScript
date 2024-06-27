const jwt = require("jsonwebtoken");

// 
// header = options (Opcional)
const header = {
  algorithm: "HS256",
  expiresIn: "1h", // El token expirará en 1 hora
  issuer: "Tech-SPY", // Emisor del token
}

const options = {
};

// Datos para codificar en el JWT
const payload = {
  sub: "1234567890",
  Estado: "Soltero",
  name: "John Doe",
  userId: 123,
  username: "exampleUser",
  role: "admin",
  admin: true,
  iat: Math.floor(Date.now() / 1000), // Tiempo de emisión del token (en segundos) 
  // exp: Math.floor(Date.now() / 1000) + 60 * 60, // Tiempo de expiración del token (1 hora)
};

// Clave secreta para firmar el JWT
const secretKey = "your-very-secure-secret-key";

// Generación del JWT con firma
const token = jwt.sign(payload, secretKey, header);
console.log("Token JWT generado:");
console.log(token);
