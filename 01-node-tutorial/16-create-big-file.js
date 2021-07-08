// 46. Streams Intro
// Streams : en basit haliyle okumak veya yazmak için kullanılır.
// Verileri sırayla okumak : Readable
// Verileri sıralı yazmka için : writable
// verileri sırayla okumak ve yazmak için duplex
// 47. Streams - Read File

// Çok büyük dosyaları bir string değişkenine eşitleyemezsin, buna çözüm olarak streams kullanılır.
const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
}
