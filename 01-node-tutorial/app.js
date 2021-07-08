// 49. Streams - HTTP Example

var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);

// chrome >  inspect > network > headers >response headers > transfer-encoding : chunked

// chunked :  Parçalanmış transfer kodlamasında, veri akışı çakışan bir "yığın" dizisine bölünmüştür. Parçalar birbirinden bağımsız olarak gönderilir ve alınır.
