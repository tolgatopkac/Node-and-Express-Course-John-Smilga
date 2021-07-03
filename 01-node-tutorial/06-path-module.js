// Path module : dosya veya dizin yollarıyla çalışmak için yardımcı programlar sağlar.

const path = require("path");

console.log(path.sep);
// Output : \

const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);
// Output : \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base);
// Output : test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
// C:\Users\3579\Desktop\Node.js-and-Express.js-Course\01-node-tutorial\content\subfolder\test.txt
