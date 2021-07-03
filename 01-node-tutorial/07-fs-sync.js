// 20. FS - Module (sync)
// dosyaları okumak ve yine dosyaları farklı bir dosyaya yazdırma yöntemi

const { readFileSync, writeFileSync } = require("fs"); // ???
console.log("start");
const fs = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);
// Output  : Hello this is first text file Hello this is second text file
// farklı konumlarda bulunan dosyaları okuyup, içeriği alıp ekrana yazdırma

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first},${second}`
  //   { flag: "a" }
);

//Farklı dosyalarda bulunan içeriği farklı bir dosyaya yazdırma, eğer bu dosya yoksa node bunu otomatik olarak oluşturur.

console.log("done with this task");
console.log("starting the next one");
