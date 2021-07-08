// 39. Async Patterns - Setup Promises
const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// 40. Async Patterns - Refactor to Async
// -----!!!!!!!!!!--------------------------------
const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
// -----!!!!!!!!!!--------------------------------
start();
// asynchronous olduğu için 3 parametre kullanmalıyız,
// 1 dosya değilde birden fazla dosya okumak isteseydik ?

/* readFile("./content/first.txt", "utf8", (err, data) => {
  if (err) {
    return;
  } else {
    console.log(data);
  }
});
 */
