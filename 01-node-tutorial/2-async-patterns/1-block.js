// 38. Async Patterns - Blocking Code
// -- 08-fs-async.js dosyasında writefile ve readfile modülleriyle oluşturulan asynchronous callback her ne kadar harikada olsa da oluşturulan kod içiçe üçgen şeklinde callback olduğu için dağınık bir kod. Bunun alternatifi:

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    // blocking code
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("About Page");
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
