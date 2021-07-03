// 21. FS - Module (async)
// async method works, we need to provide a callback
// callback fonksiyon : Bir fonksiyonun çalışması tamamlandıktan sonra, başka bir fonksiyonun çalışmasını sağlayan fonksiyonlar callback function olarak adlandırılır.
// Asenkronik yapı içerisinde fonksiyonlar çağırılmak için herhangi bir fonksiyonun bitmesini veya başka bir işlevin tamamlanmasını beklemez. -multitasking-

const { readFile, writeFile, write } = require("fs");
console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result);

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});

console.log("starting next task");

// Output : start
// starting next task
// done with this task
