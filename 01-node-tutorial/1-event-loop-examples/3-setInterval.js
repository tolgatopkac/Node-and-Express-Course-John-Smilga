setInterval(() => {
  console.log("hello world");
}, 2000);
console.log(`I will run first`);
// process stays alive unless
// Kill process CTRL + C
// unexpected error

// OUTPUT :
// I will run first
// hello world
// hello world
// hello world
// hello world
// hello world
// ....
