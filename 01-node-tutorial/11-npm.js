//  NPM nedir ?
// -- Npm temel olarak 3. parti yazılımları yüklemeyi sağlayan bir araçtır.
// -- npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you’re sharing
// https://medium.com/@busramemis/npm-nedir-bc08c9610df2

// ---------------------------------
// NPM
// -- Kendi kodumuzu başka projelerde kullanmak,
// -- başkalarının tarafından yazılan kodu kullanmak,
// -- kendi çözümlerimizi başka geliştiricilerle paylaşmak

// package = dependency =  modules

// npmjs.com 'da herkes istediğini yayınlayabilir, denetleyen bir sistem yok.

// ---------------------------------------------------------------------------------------------
// --Kendi projemizde npm nasıl kullanılır .?
// 27. NPM Command

// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project  en sık kullanacağın bu
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// 28. First Packages and package.json

// package.json - manifest file (stores important info about project/package)
//--package.json oluşturmanın 3 yolu
// manual approach  create package json in the root, create properties etc
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm i lodash : yardımcı kütüphane, kurulum amaçlı kullanılır
// npm i bootstrap

// package.json : paketine ihtiyacımızın olmasının sebebi projemiz hakkında bize detaylar sunar, kullandığımız modullerin sürümleri hakkında bilgi verir.

// loadash  modulünün kullanımına bir örnek, flattenDeep() methodu ile iç içe geçmiş dizileri düzleştirdik
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
// Output : [1,2,3,4]

// ----------------------------------------------------------------------
// 29. Share Code on Github
// package.json önemi : projene yüklediğin modülleri github hesabına yüklemezsin, bu yüzden başkasının projenin çalıştırması için package.json dosyasını oluşturman gerekiyor ki, senin kullandığın modüller hakkında  bilgisi olsun.
// yine sen başkasının projesini indirip, onun kullandığı modelleri kurmak için "npm install" komutu ile o projede kullanılan modülleri indirirsin.
