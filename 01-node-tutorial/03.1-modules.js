/*
//13- Modules
/*
//2
const john = "john";
const peter = "peter";

//1
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};

sayHi("Tolga");
sayHi(john);
sayHi(peter);


// 14. First Module
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

const names = require("./03.2-names");
const sayHi = require("./03.3-utils");
// console.log(names);
const data = require("./03.4-alternative-flavor");
require("./04-mind-grenade");
// console.log(data);
// sayHi("Tolga");
// sayHi(names.john);
// sayHi(names.peter);

*/

//  CommonJS,every file is module (by default)
//  Modules - Encapsulated Code (only minimun)
const names = require("./03.2-names");
const sayHi = require("./03.3-utils");
const data = require("./03.4-alternative-flavor");
require("./04-mind-grenade");
console.log(data);
sayHi("Tolga");
sayHi(names.john);
sayHi(names.peter);
