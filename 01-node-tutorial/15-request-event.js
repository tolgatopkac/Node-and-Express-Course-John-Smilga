// 45. Events Emitter - HTPP Module Example
// !!! events node.js in temel bir yapı taşıdır.

const http = require("http");
// Şimdiye kadar bu şekilde sunucuyu kurduk
// const server = http.createServer((req, res) => {
//   res.end("Welcome");
// });

// Fakat event emitter api kullanrak bu şekilde de sunucu kurulabilir
// Using Event Emitter API
const server = http.createServer();
// emits request event
// sucribe to it/ listen for it / respon to it
// "request" api'ye özel isim
server.on("request", (req, res) => {
  res.end("Welcome");
});
server.listen(5000);
