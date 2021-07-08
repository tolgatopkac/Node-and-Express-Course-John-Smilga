// 41 Async Patterns - Node's Native Option
const { readFile, writeFile } = require("fs").promises;
// aşağıdaki modülü kullanmak yerine, fs.promise ile aynı işlemi yaparsın.
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// aşağıdaki üçgen koda ihtiyaç olmadan modül ile oluşturma
/* const getText = (path) => {
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
 */
// -----!!!!!!!!!!--------------------------------
const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
// -----!!!!!!!!!!--------------------------------
start();
