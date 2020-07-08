//Consulta de la base de datos
require("../connection");

const Product = require("../models/Product");

async function main() {
  const products = await Product.find();
  console.log(products);
}

main();

//Esto me da una lista de todos los datos de la base de datos
