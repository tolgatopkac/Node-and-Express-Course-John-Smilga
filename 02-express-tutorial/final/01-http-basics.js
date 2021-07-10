// 56. HTTP - Basics
// mime type
// http status code
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./index.html");

const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.method);Output : GET
  //   console.log(req.url);
  const url = req.url;
  //home page
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
    // about page
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about</h1>");
    res.end();
    // 404
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
  }
});

const port = 5000;
server.listen(port, () => {
  console.log("...");
});
