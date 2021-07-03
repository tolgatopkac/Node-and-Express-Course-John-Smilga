// GLOBALS -- NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommanJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//----------------------------------------------------------------------

//Notlarım
//-- Node.js global nesnesinde çeşitli nesne, fonksiyon ve sabitler tanımlıdır.
// Global nesnesine her yerden erişilir.

//!global nesnesi
// Tarayıcılarda değişken, fonksiyon ve nesneler window nesnesi altında saklanır.  Node.js içerisinde ise global nesnesi altında saklanır.

"use strict";
global.ad = "Tolga";
console.log(ad);

//!console nesnesi
// Ekrana yazma işleminde kullanılan çeşitli metotlara sahip nesne

//! __filename : çalıştırılan dosyanın yolunu verir.

//! __dirname : çalıştırılan dosyanın klasör yolunu verir.

console.log(__dirname);
