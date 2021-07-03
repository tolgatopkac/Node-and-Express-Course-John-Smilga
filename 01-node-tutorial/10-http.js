// 23. HTTP Intro
// 24. HTTP - Module (setup)

// HTTP module
const http = require("http");
// createServer methodu 2 parametreden oluşur, ikisi de birer nesnedir.
// ilk parametre gelen talebi temsil eder, bir müşterinin istekleri olarak düşünebilirsin
// ikinci parametre ise isteğe göre müşteriye gönderilen yanıt

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
  <h1>Opps!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home </a>
  `);
  }
});

server.listen(5000);

// 25. HTTP- Module (more features)
