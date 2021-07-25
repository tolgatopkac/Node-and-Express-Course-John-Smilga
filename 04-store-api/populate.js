// JSON dosyasını projenin database'ine ekleme
require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProduct = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    // Yer alan mevcut verileri siler.
    await Product.create(jsonProduct);
    // ilgili json dosyasınaki verileri ekler.
    console.log("Success !!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
